import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Linkedin, Loader2, CheckCircle } from "lucide-react";
import { sendContactMessage } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abax Professional Services" },
      { name: "description", content: "Reach our partners in Lagos. We reply within one business day." },
    ],
  }),
  component: ContactPage,
});

const info = [
  { icon: MapPin, label: "Office", value: "No. 2, Ibeju Lekki Street,\nDolphin Estate, Ikoyi, Lagos" },
  { icon: Phone, label: "Phone", value: "+234 911 010 8791", href: "tel:+2349110108791" },
  { icon: Mail, label: "Email", value: "info@abaxps.com", href: "mailto:info@abaxps.com" },
  { icon: Clock, label: "Hours", value: "Mon — Fri · 9:00 AM to 5:00 PM" },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submitContactMessage = useServerFn(sendContactMessage);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const organisation = String(fd.get("org") || "").trim();
    const message = String(fd.get("msg") || "").trim();

    if (!name || !email || message.length < 5) {
      setError("Please fill in your name, email, and a short message.");
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const result = await submitContactMessage({
        data: { name, email, organisation, message },
      });

      if (result.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(result.error ?? "We couldn't send your message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again shortly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative pt-44 pb-28 lg:pb-40 bg-ink text-cream overflow-hidden min-h-screen">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-gold/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Let's talk</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02]"
            >
              Begin a <span className="italic text-gradient-gold">conversation</span> with our partners.
            </motion.h1>
            <p className="mt-8 text-cream/70 max-w-xl text-lg leading-relaxed">
              Whether you're preparing for an audit, planning a transaction, or strengthening your finance function — we'd be glad to help you think it through.
            </p>

            <div className="mt-14 grid sm:grid-cols-2 gap-px bg-cream/10 border border-cream/10">
              {info.map((item, i) => {
                const Icon = item.icon;
                const body = (
                  <div className="bg-ink p-6 lg:p-7 h-full group hover:bg-ink/60 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon strokeWidth={1.4} className="w-5 h-5 text-gold" />
                      <div className="text-[10px] uppercase tracking-[0.3em] text-cream/50">{item.label}</div>
                    </div>
                    <div className="text-base lg:text-lg whitespace-pre-line leading-snug group-hover:text-gold transition-colors">
                      {item.value}
                    </div>
                  </div>
                );
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    {item.href ? <a href={item.href}>{body}</a> : body}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/abax-professional-services"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 border border-cream/20 rounded-full text-sm hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Follow on LinkedIn
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 lg:sticky lg:top-28 self-start bg-cream/[0.04] backdrop-blur border border-cream/10 p-8 lg:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                <CheckCircle className="w-12 h-12 text-gold" strokeWidth={1.2} />
                <div>
                  <div className="font-display text-2xl mb-2">Message sent.</div>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    Thank you for reaching out. We'll respond within one business day.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs uppercase tracking-[0.2em] text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Send a message</div>
                  <h3 className="font-display text-2xl">We reply within one business day.</h3>
                </div>

                {[
                  { label: "Name", type: "text", id: "name", required: true },
                  { label: "Email", type: "email", id: "email", required: true },
                  { label: "Organisation", type: "text", id: "org", required: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-2">
                      {f.label}{f.required && <span className="text-gold"> *</span>}
                    </label>
                    <input
                      id={f.id} name={f.id} type={f.type} required={f.required}
                      maxLength={200}
                      className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2.5 text-cream placeholder:text-cream/30 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="msg" className="block text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-2">
                    Message<span className="text-gold"> *</span>
                  </label>
                  <textarea
                    id="msg" name="msg" rows={5} required maxLength={4000}
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2.5 text-cream placeholder:text-cream/30 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-xs leading-relaxed">{error}</p>
                )}

                <button
                  type="submit" disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-3 bg-gold text-gold-foreground px-6 py-4 rounded-full text-sm font-medium hover:shadow-gold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <>Send message <span aria-hidden>→</span></>}
                </button>

                <p className="text-[11px] text-cream/40 leading-relaxed">
                  Your message is sent directly to our team. By submitting, you agree we may contact you regarding your enquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
