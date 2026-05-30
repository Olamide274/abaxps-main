import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import heroBoardroom from "@/assets/hero-boardroom.jpg";
import heroDesk from "@/assets/hero-desk.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abax Professional Services" },
      { name: "description", content: "Abax Professional Services is a firm of Chartered Accountants and Business Advisors built on deep expertise and a commitment to long-term client partnerships." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { title: "Proven Experience", desc: "Our consultants bring decades of post-qualification experience from top-tier firms, financial institutions, and the public sector — giving clients access to senior-level insight on every engagement." },
  { title: "Senior-Level Engagement", desc: "We are a partner-led firm. Every assignment is personally led by a senior consultant who understands your regulatory landscape, risk profile, and strategic priorities." },
  { title: "Technical Rigour", desc: "We apply recognised international standards (IFRS, ISA, IIA, COSO) while ensuring our advice remains practical, commercially grounded, and easy to implement." },
  { title: "Independence", desc: "Our work is anchored in objectivity, professional independence, and evidence-based judgement — the foundation of credible assurance and trusted advice." },
  { title: "Long-Term Relationships", desc: "We invest in understanding our clients' businesses deeply. We see every engagement as the beginning of a long-term partnership, not a one-off transaction." },
  { title: "Client-Focused Delivery", desc: "We tailor every engagement to the specific context of the client — never templated, always thoughtful, and built around measurable outcomes." },
];

const faqs = [
  {
    q: "What types of organisations do you work with?",
    a: "We work with a wide range of organisations across the private sector, public sector, and not-for-profit space. Our clients include financial institutions, listed companies, SMEs, government agencies, NGOs, and donor-funded programmes. We have particular depth in financial services, telecoms, FMCG, and the public sector.",
  },
  {
    q: "How does your engagement model work?",
    a: "Every engagement is led personally by a senior consultant — not delegated to junior staff. We start with a detailed scoping conversation to understand your objectives, then propose a tailored approach, timeline, and fee. We keep communication clear and regular throughout.",
  },
  {
    q: "Do you work with international organisations and NGOs?",
    a: "Yes. We have extensive experience supporting international NGOs, donor-funded programmes, and development finance institutions operating in Nigeria. We understand donor reporting requirements, including USAID, DFID/FCDO, EU, and UN system requirements.",
  },
  {
    q: "How are your fees structured?",
    a: "Fees are tailored to the scope, complexity, and duration of each engagement. We offer fixed-fee, retainer, and time-and-materials arrangements depending on the nature of the work. We are transparent about fees from the outset and do not charge for initial scoping conversations.",
  },
  {
    q: "Are you registered with the relevant professional bodies?",
    a: "Yes. Abax Professional Services is registered with the Institute of Chartered Accountants of Nigeria (ICAN) and the Financial Reporting Council of Nigeria (FRC). Our individual consultants hold active memberships with ICAN, CITN, IIA, ISACA, and CIPM, among others.",
  },
  {
    q: "What is your approach to confidentiality?",
    a: "Confidentiality is a core professional obligation and a firm value. All client engagements are subject to strict professional confidentiality standards. We sign non-disclosure agreements where required and maintain robust information security practices.",
  },
  {
    q: "Can you work alongside our existing finance team?",
    a: "Absolutely. We frequently co-source, supplement, or support in-house finance and internal audit teams — particularly during periods of transition, capacity constraints, or regulatory review. We aim to build capability within client organisations, not dependency on us.",
  },
  {
    q: "How do I get started?",
    a: "Simply reach out via our contact page or call our office directly. An initial conversation with one of our senior consultants is always without charge. We'll take the time to understand your needs and propose the right approach.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#F5C518] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-24 lg:pb-32 bg-[#1B3FA0] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBoardroom} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 veil" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#F5C518]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#F5C518]">About the firm</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl"
          >
            A modern firm built on <span className="italic text-[#F5C518]">deep expertise</span> and trusted relationships.
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-white/75 leading-relaxed">
            Abax Professional Services is a firm of Chartered Accountants and Business Advisors providing Audit and Assurance,
            Tax, Financial and Management Advisory services to growing and established organisations across Nigeria.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#F5C518]" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our story</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              Built on a foundation of <span className="italic text-[#F5C518]">decades</span> of practice.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Abax Professional Services was established to provide independent, senior-led professional services to organisations
              seeking high-quality audit, tax, and advisory support. We are the evolution of a practice with deep roots in the Nigerian
              professional services landscape — built around the experience, relationships, and values of our founding partners.
            </p>
            <p>
              Our principals bring decades of post-qualification experience from leading international accounting firms, major financial
              institutions, and senior public sector roles. That depth of experience — across multiple sectors and market cycles — informs
              everything we do: our technical approach, our risk awareness, and our instinct for what clients actually need.
            </p>
            <p>
              We are independent by design and senior-led by intent. Every engagement carries the personal judgement of professionals
              who have seen the regulatory landscape evolve, and who understand where the real risks — and the real opportunities — sit.
            </p>
            <p>
              Above all, we work in service of long-term relationships. The most rewarding part of our practice is being the firm our
              clients call first — when they face a challenge, a change, or an opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 lg:py-32 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#F5C518]" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our purpose</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl mb-16 max-w-3xl">
            Vision & <span className="italic text-[#F5C518]">Mission</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                tag: "Our Vision",
                title: "To be a leading, respected professional services firm.",
                body: "To build a resilient, high-performing professional services firm that consistently delivers measurable value — and that is recognised as a trusted partner for governance, financial reporting, and strategic advisory across Nigeria and beyond.",
              },
              {
                tag: "Our Mission",
                title: "Strengthen governance. Enhance transparency. Create value.",
                body: "To deliver high-quality assurance and advisory services that strengthen governance, enhance financial transparency, and create lasting, measurable value for the clients we serve — through senior-led, independent, and technically rigorous work.",
              },
            ].map((item) => (
              <div key={item.tag} className="bg-white p-10 lg:p-14">
                <div className="text-xs uppercase tracking-[0.3em] text-[#F5C518] mb-6">{item.tag}</div>
                <h3 className="font-display text-3xl lg:text-4xl leading-tight mb-6">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#F5C518]" />
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why Abax</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                Six principles that shape <span className="italic text-[#F5C518]">every engagement</span>.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our values are not aspirational statements — they are the standards we hold ourselves to on every engagement, with every client.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {principles.map((p, i) => (
              <div key={p.title} className="bg-background p-8 lg:p-10 group hover:bg-[#EEF2FF] transition-colors">
                <div className="text-xs uppercase tracking-[0.3em] text-[#F5C518] mb-3">0{i + 1}</div>
                <div className="font-display text-2xl mb-3">{p.title}</div>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships & Affiliations */}
      <section className="py-20 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#F5C518]" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Memberships & Affiliations</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl mb-10">Professional Accreditations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ICAN", full: "Institute of Chartered Accountants of Nigeria" },
              { name: "CITN", full: "Chartered Institute of Taxation of Nigeria" },
              { name: "FRC", full: "Financial Reporting Council of Nigeria" },
              { name: "ISACA", full: "Information Systems Audit & Control Association" },
              { name: "IIA", full: "Institute of Internal Auditors" },
              { name: "IRM", full: "Institute of Risk Management" },
              { name: "CIPM", full: "Chartered Institute of Personnel Management" },
              { name: "MSI", full: "Member, MSI Global Alliance" },
            ].map((a) => (
              <div key={a.name} className="bg-white border border-[#C8D4F5] p-6 rounded-sm">
                <div className="font-display text-2xl text-[#1B3FA0] mb-2">{a.name}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{a.full}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#F5C518]" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">FAQs</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl mb-12">
            Frequently asked <span className="italic text-[#F5C518]">questions</span>.
          </h2>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-[#1B3FA0] text-white overflow-hidden">
        <img src={heroDesk} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 veil" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Ready to start a <span className="italic text-[#F5C518]">conversation?</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/75 text-lg">
            Whether you're preparing for an audit, planning a transaction, or strengthening your finance function — we'd be glad to think it through with you.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#F5C518] text-[#1B3FA0] text-sm font-semibold hover:shadow-gold transition-all">
            Contact our partners <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
