import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Calculator, Scale, Briefcase, Users, ChevronRight } from "lucide-react";
import heroTower from "@/assets/hero-tower.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Abax Professional Services" },
      { name: "description", content: "Audit & assurance, financial reporting, tax management, governance & risk, transaction advisory, and human resources consulting." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    tagline: "Confidence, credibility, and clarity.",
    desc: "Independent, high-quality assurance engagements aligned to international standards. We deliver an audit experience built on rigour, communication, and judgement.",
    items: [
      "Statutory & financial statement audits",
      "Special purpose & agreed-upon procedures",
      "Internal audit & co-sourcing",
      "Audit readiness & remediation",
    ],
  },
  {
    icon: FileText,
    title: "Financial Reporting & Compliance",
    tagline: "Transparency in every disclosure.",
    desc: "Strengthening the accuracy, transparency, and trustworthiness of your financial reporting under IFRS and local GAAP — from policy design to disclosure review.",
    items: [
      "IFRS conversion & ongoing support",
      "Technical accounting memos",
      "Sustainability reporting (IFRS S1 / S2)",
      "Regulatory & statutory filings",
    ],
  },
  {
    icon: Calculator,
    title: "Tax Management & Advisory",
    tagline: "Compliant. Efficient. Forward-looking.",
    desc: "Helping organisations navigate complexity, optimise tax positions, and stay ahead of regulatory change across corporate income tax, VAT, withholding tax, and transfer pricing.",
    items: [
      "Corporate tax compliance",
      "Tax planning & structuring",
      "Transfer pricing documentation",
      "Tax controversy & dispute support",
    ],
  },
  {
    icon: Scale,
    title: "Governance, Risk & Internal Control",
    tagline: "Resilient organisations, strong controls.",
    desc: "Building resilient organisations through governance frameworks, enterprise risk management, and internal control systems that scale with your business.",
    items: [
      "Board & governance reviews",
      "Enterprise risk frameworks",
      "Internal control design & testing",
      "Policy & procedure development",
    ],
  },
  {
    icon: Briefcase,
    title: "Strategic & Transaction Advisory",
    tagline: "Decisions you can defend.",
    desc: "Financial and commercial advice for major decisions — from due diligence and valuations to performance improvement and finance function transformation.",
    items: [
      "Financial & commercial due diligence",
      "Business valuations",
      "Finance function review",
      "Performance improvement",
    ],
  },
  {
    icon: Users,
    title: "Human Resources Consulting",
    tagline: "People strategy, professionally led.",
    desc: "HR advisory grounded in governance: organisation design, reward, talent, and HR policy frameworks that align people strategy with business performance.",
    items: [
      "Organisational design & workforce planning",
      "Reward & compensation review",
      "HR policy & handbook development",
      "Performance management systems",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative pt-44 pb-24 lg:pb-32 bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroTower} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 veil" />
          <div className="absolute inset-0 grain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Our expertise</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl"
          >
            Professional services built for <span className="italic text-gradient-gold">modern businesses</span>.
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-cream/75 leading-relaxed">
            Comprehensive financial, governance, tax, and advisory solutions designed to strengthen compliance, improve
            reporting accuracy, and drive sustainable organisational performance.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                  className="group bg-background p-10 lg:p-12 relative"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-sm bg-secondary group-hover:bg-gold transition-colors flex items-center justify-center">
                      <Icon strokeWidth={1.4} className="w-6 h-6 text-foreground group-hover:text-gold-foreground transition-colors" />
                    </div>
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">0{i + 1}</div>
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl leading-tight mb-2">{s.title}</h3>
                  <p className="text-gold text-sm uppercase tracking-[0.18em] mb-5">{s.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <ChevronRight className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Not sure where to start? <span className="italic text-gradient-gold">Let's talk.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            A 30-minute conversation with one of our partners is often the fastest way to scope the right engagement for your business.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-gold hover:text-gold-foreground transition-colors">
            Speak with a partner <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
