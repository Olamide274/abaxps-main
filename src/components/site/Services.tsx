import { motion } from "framer-motion";
import { useState } from "react";
import { Scale, FileText, Calculator, ShieldCheck, LineChart } from "lucide-react";

const services = [
  {
    icon: Scale,
    number: "01",
    title: "Audit & Assurance",
    desc: "Independent, high-quality assurance that delivers confidence, credibility and clarity to boards, regulators and investors.",
    points: [
      "External audit & financial statement assurance",
      "Internal audit (outsource & co-source)",
      "IFRS, GAAP & local-standard reporting",
      "Regulatory & grant audits",
    ],
  },
  {
    icon: FileText,
    number: "02",
    title: "Financial Reporting & Compliance",
    desc: "Strengthening transparency, accuracy and trust across every aspect of your financial reporting cycle.",
    points: [
      "IFRS / GAAP financial statements",
      "Group consolidation & close support",
      "Internal controls design & testing",
      "Accounting policy development",
    ],
  },
  {
    icon: Calculator,
    number: "03",
    title: "Tax Management & Advisory",
    desc: "Helping organisations navigate complexity, optimise tax positions and stay ahead of regulatory change.",
    points: [
      "Corporate, personal & indirect tax compliance",
      "Strategic & cross-border tax planning",
      "Transfer pricing documentation",
      "Tax authority audit & dispute support",
    ],
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Governance, Risk & Internal Control",
    desc: "Building resilient organisations through strong governance, proactive risk management and effective controls.",
    points: [
      "Corporate governance & board advisory",
      "Enterprise Risk Management (ERM)",
      "COSO & ICFR control frameworks",
      "Business continuity & resilience",
    ],
  },
  {
    icon: LineChart,
    number: "05",
    title: "Management & Financial Advisory",
    desc: "Driving performance, growth and financial clarity through strategic, operational and people-focused excellence.",
    points: [
      "Business strategy & performance improvement",
      "Budgeting, forecasting & financial modelling",
      "Organisational design & change",
      "HR strategy & outsourced HR advisory",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-10 mb-20"
        >
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Service catalogue</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              A complete <span className="italic text-gradient-gold">professional services</span> practice.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Five disciplines, one partner-led team. Audit, tax, governance and advisory delivered with the rigour
              of a Big Four practice and the responsiveness of a specialist firm.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`relative group p-8 lg:p-10 bg-card transition-colors duration-500 ${
                  isActive ? "bg-ink text-cream" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-12">
                  <Icon
                    strokeWidth={1.2}
                    className={`w-10 h-10 transition-colors duration-500 ${
                      isActive ? "text-gold" : "text-foreground"
                    }`}
                  />
                  <span
                    className={`font-display text-sm transition-colors duration-500 ${
                      isActive ? "text-gold" : "text-muted-foreground"
                    }`}
                  >
                    {s.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl mb-3 leading-tight">{s.title}</h3>
                <p
                  className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                    isActive ? "text-cream/75" : "text-muted-foreground"
                  }`}
                >
                  {s.desc}
                </p>

                <motion.ul
                  initial={false}
                  animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden text-sm space-y-2"
                >
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-cream/80">
                      <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                      {p}
                    </li>
                  ))}
                </motion.ul>

                <div
                  className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-700 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
