import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import appCss from "../styles.css?url";

const GA_ID = "G-525320837";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-[#1B3FA0]">404</h1>
        <h2 className="mt-4 text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-[#1B3FA0] px-5 py-2.5 text-sm text-white">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 inline-flex rounded-full bg-[#1B3FA0] px-5 py-2.5 text-sm text-white">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Abax Professional Services — Trusted Insight & Sustainable Growth" },
      { name: "description", content: "Chartered Accountants and Business Advisors delivering audit, tax, advisory, governance, and financial reporting solutions." },
      { property: "og:title", content: "Abax Professional Services" },
      { property: "og:description", content: "Trusted insight. Sustainable growth." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, async: true },
      { children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');` },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem("abax_cookie_consent")) setVisible(true); } catch {}
  }, []);
  const accept = () => { try { localStorage.setItem("abax_cookie_consent", "accepted"); } catch {} setVisible(false); };
  const decline = () => { try { localStorage.setItem("abax_cookie_consent", "declined"); } catch {} setVisible(false); };
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="max-w-3xl mx-auto bg-white border border-[#C8D4F5] rounded-xl shadow-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-[#4A65B8] leading-relaxed">
          We use cookies to improve your experience and analyse site traffic. By clicking "Accept", you agree to our use of cookies.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={decline} className="text-xs px-4 py-2 rounded-full border border-[#C8D4F5] text-[#4A65B8] hover:border-[#1B3FA0] transition-colors">Decline</button>
          <button onClick={accept} className="text-xs px-4 py-2 rounded-full bg-[#1B3FA0] text-white hover:bg-[#F5C518] hover:text-[#1B3FA0] transition-colors font-semibold">Accept</button>
        </div>
      </div>
    </div>
  );
}

const botResponses: Record<string, string> = {
  audit: "We provide statutory audits, internal audits, and assurance engagements aligned to ISA standards. Would you like to speak with a partner about your audit needs?",
  tax: "Our tax team covers corporate income tax, VAT, transfer pricing, and tax advisory. Contact us to discuss your requirements.",
  governance: "We offer governance reviews, enterprise risk frameworks, and internal control design. Our consultants have 30+ years of experience.",
  risk: "We specialise in enterprise risk management, risk frameworks, and internal control design.",
  services: "We offer Audit & Assurance, Tax Advisory, Financial Reporting, Governance & Risk, Transaction Advisory, and HR Consulting.",
  contact: "Reach us at info@abaxps.com, call +234 911 010 8791, or visit No. 2 Ibeju Lekki Street, Dolphin Estate, Ikoyi, Lagos.",
  hr: "Our HR Consulting team covers organisation design, reward, talent management, and HR policy frameworks.",
  default: "Thank you for your message. For urgent matters please call +234 911 010 8791 or email info@abaxps.com. A partner will respond within one business day.",
};

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<"intake" | "chat">("intake");
  const [intake, setIntake] = useState({ name: "", email: "", phone: "" });
  const [intakeError, setIntakeError] = useState("");
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([]);
  const [input, setInput] = useState("");

  const startChat = () => {
    if (!intake.name.trim() || !intake.email.trim() || !intake.phone.trim()) {
      setIntakeError("Please fill in all fields to continue.");
      return;
    }
    setIntakeError("");
    setMessages([
      { from: "bot", text: `Hello ${intake.name}! Welcome to Abax Professional Services. How can we help you today?` },
    ]);
    setStage("chat");
  };

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { from: "user", text: userMsg }]);
    setInput("");
    const key = Object.keys(botResponses).find((k) => userMsg.toLowerCase().includes(k)) || "default";
    setTimeout(() => setMessages((m) => [...m, { from: "bot", text: botResponses[key] }]), 600);
  };

  const reset = () => { setStage("intake"); setIntake({ name: "", email: "", phone: "" }); setMessages([]); setInput(""); };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-80 bg-white border border-[#C8D4F5] rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1B3FA0] text-white px-4 py-3 flex items-center justify-between">
              <div>
                <div className="font-semibold text-sm">Abax Support</div>
                <div className="text-[10px] text-white/70">{stage === "intake" ? "Tell us about yourself" : "We're here to help"}</div>
              </div>
              <div className="flex items-center gap-2">
                {stage === "chat" && (
                  <button onClick={reset} className="text-white/60 hover:text-white text-[10px] uppercase tracking-wide">Reset</button>
                )}
                <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-lg leading-none">✕</button>
              </div>
            </div>

            {stage === "intake" ? (
              /* Pre-chat intake form */
              <div className="p-5 space-y-4 bg-[#F8FAFF]">
                <p className="text-xs text-[#4A65B8] leading-relaxed">
                  Before we chat, please share a few details so we can assist you better.
                </p>
                {[
                  { label: "Full Name", key: "name", type: "text", placeholder: "e.g. John Doe" },
                  { label: "Email Address", key: "email", type: "email", placeholder: "e.g. john@company.com" },
                  { label: "Phone Number", key: "phone", type: "tel", placeholder: "e.g. +234 800 000 0000" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#1B3FA0]/60 mb-1">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={intake[f.key as keyof typeof intake]}
                      onChange={(e) => setIntake((v) => ({ ...v, [f.key]: e.target.value }))}
                      onKeyDown={(e) => e.key === "Enter" && startChat()}
                      className="w-full text-sm border border-[#C8D4F5] rounded-lg px-3 py-2.5 outline-none focus:border-[#1B3FA0] bg-white text-[#0D1B3E] placeholder:text-[#9BAAD4]"
                    />
                  </div>
                ))}
                {intakeError && <p className="text-red-500 text-xs">{intakeError}</p>}
                <button
                  onClick={startChat}
                  className="w-full bg-[#1B3FA0] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#F5C518] hover:text-[#1B3FA0] transition-colors"
                >
                  Start Chat →
                </button>
              </div>
            ) : (
              /* Chat messages */
              <>
                <div className="h-64 overflow-y-auto p-4 space-y-3 bg-[#F8FAFF]">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[82%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                        m.from === "user" ? "bg-[#1B3FA0] text-white" : "bg-white border border-[#C8D4F5] text-[#1B3FA0]"
                      }`}>{m.text}</div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-[#C8D4F5] flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Type a message..."
                    className="flex-1 text-sm border border-[#C8D4F5] rounded-full px-4 py-2 outline-none focus:border-[#1B3FA0]"
                  />
                  <button onClick={send} className="w-9 h-9 rounded-full bg-[#F5C518] text-[#1B3FA0] flex items-center justify-center font-bold hover:bg-[#1B3FA0] hover:text-white transition-colors">→</button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-[#1B3FA0] text-white shadow-xl flex items-center justify-center hover:bg-[#F5C518] hover:text-[#1B3FA0] transition-colors"
        aria-label="Chat with us"
      >
        {open
          ? <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
          : <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        }
      </button>
    </div>
  );
}



function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen"><Outlet /></main>
      <Footer />
      <CookieBanner />
      <Chatbot />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
