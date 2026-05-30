import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import sofowora from "@/assets/team/sofowora.jpg";
import alamutu from "@/assets/team/alamutu.jpg";
import ajibade from "@/assets/team/ajibade.jpg";
import akinkugbe from "@/assets/team/akinkugbe.webp";
import ebele from "@/assets/team/ebele.jpg";
import osoneye from "@/assets/team/osoneye.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Leadership Team — Abax Professional Services" },
      { name: "description", content: "Meet the senior professionals leading Abax — partners and consultants across audit, tax, advisory, governance, and HR." },
    ],
  }),
  component: TeamPage,
});

const leaders = [
  {
    name: "Olapeju E. Sofowora",
    creds: "B.Sc, FCA, FCIT, CISA",
    role: "Principal Consultant · Founding Partner",
    photo: sofowora,
    bio: `Olapeju Sofowora is the Principal Consultant and Founding Partner of Abax Professional Services. She has over 30 years of post-qualification experience spanning audit, tax, corporate finance, financial advisory, and management consulting.

She began her professional career at Coopers & Lybrand (now PricewaterhouseCoopers), gaining deep experience across audit and assurance before transitioning into senior roles in the banking and financial services sector. She served as Head of Internal Audit at Fountain Trust Bank and later as Deputy General Manager – Finance at the same institution.

She subsequently founded Abax-OOSA Professionals, a multi-disciplinary professional services firm where she served as Managing Partner for over 17 years, advising public and private sector clients across audit, tax, and advisory engagements.

Olapeju is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), a Fellow of the Chartered Institute of Taxation of Nigeria (CITN), and a Certified Information Systems Auditor (CISA). She is deeply committed to governance, financial transparency, and the professional development of the next generation of accountants.`,
  },
  {
    name: "Ayo Alamutu",
    creds: "B.Sc, FCA, CISA, CIRM, ORE",
    role: "Senior Consultant — Governance & Risk",
    photo: alamutu,
    bio: `Ayo Alamutu is a governance, risk, audit, and compliance executive with over 30 years of professional experience across the United Kingdom and Nigeria. He brings a rare combination of technical depth and strategic perspective to every engagement.

He has held senior leadership positions in financial services, the public sector, and professional practice — including roles as Head of Internal Audit and Chief Risk Officer at major financial institutions. He has extensive experience in IT audit, enterprise risk management, and regulatory compliance.

Ayo is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), a Certified Information Systems Auditor (CISA), and a Certified International Risk Manager (CIRM). He currently serves as Vice Chair of the IRM Nigeria Regional Group and as a Board Member of the Institute of Internal Auditors (IIA) Nigeria Chapter.

He is a sought-after facilitator and speaker on governance, risk, and internal audit matters.`,
  },
  {
    name: "Babafunke Ajibade",
    creds: "B.Sc, FCA, CPFA",
    role: "Senior Consultant — Audit & Assurance",
    photo: ajibade,
    bio: `Babafunke Ajibade is a Senior Consultant specialising in audit and assurance, with nearly three decades of professional experience across the private sector, government, and the third sector in both Nigeria and the United Kingdom.

She has led and quality-reviewed statutory audits for a wide range of organisations, including regulated entities, public sector bodies, and not-for-profit organisations. Her technical expertise spans financial statement audits, agreed-upon procedures, and internal audit co-sourcing arrangements.

Babafunke is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and a Certified Public Finance Accountant (CPFA). She is known for her meticulous attention to detail, her ability to communicate complex audit findings clearly to boards and audit committees, and her commitment to quality assurance on every engagement.`,
  },
  {
    name: "Fusi Akinkugbe",
    creds: "B.Sc, FCA",
    role: "Senior Consultant — Financial Services",
    photo: akinkugbe,
    bio: `Fusi Akinkugbe brings nearly four decades of experience across professional practice, corporate leadership, and the public sector. Her career spans both the private and public sectors, with significant leadership roles in financial services, governance, and professional advisory.

She is a pioneer Managing Director/CEO of Chrysalis Limited and has served in senior executive and non-executive roles across a range of institutions. Her areas of specialism include financial reporting, governance advisory, forensic accounting, and IFRS implementation.

Fusi is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN). She is respected for her strategic thinking, her commitment to ethical practice, and her ability to translate complex financial and governance challenges into clear, actionable recommendations.`,
  },
  {
    name: "Anthony Ebele",
    creds: "HND, ACTI",
    role: "Head, Tax Management & Advisory",
    photo: ebele,
    bio: `Anthony Ebele heads the Tax Management and Advisory practice at Abax Professional Services. He has extensive experience advising corporations, SMEs, and high-net-worth individuals across the full range of Nigerian tax obligations and planning opportunities.

His expertise covers corporate income tax compliance and advisory, Value Added Tax (VAT), withholding tax, transfer pricing documentation and compliance, and tax controversy support — including representing clients before the Federal Inland Revenue Service (FIRS) and State Internal Revenue Services.

Anthony is an Associate of the Chartered Institute of Taxation of Nigeria (ACTI). He is known for his practical, solution-oriented approach to tax advisory and his ability to help clients achieve compliance while minimising unnecessary tax exposure.`,
  },
  {
    name: "Dare Osoneye",
    creds: "BSc, MSc, SHRM-CP, ACIPM",
    role: "Head, Human Resources Consulting",
    photo: osoneye,
    bio: `Dare Osoneye heads the Human Resources Consulting practice at Abax Professional Services. He brings deep expertise in organisation design, compensation and benefits, talent management, performance management, and HR policy development to a wide range of client engagements.

He has advised organisations across the financial services, telecoms, FMCG, and public sectors on building HR frameworks that align people strategy with business performance objectives. His approach is grounded in international HR best practice while remaining sensitive to the local operating environment.

Dare holds a Master's degree in Human Resource Management, and is a certified SHRM-CP (Society for Human Resource Management – Certified Professional) and an Associate of the Chartered Institute of Personnel Management (ACIPM) of Nigeria.`,
  },
];

function TeamPage() {
  return (
    <>
      <section className="pt-44 pb-20 lg:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Leadership excellence</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl"
          >
            Senior-led, <span className="italic text-gradient-gold">always.</span>
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Every engagement is led personally by a senior consultant — bringing decades of hands-on expertise and accountability to the work we deliver.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-0">
          {leaders.map((l, i) => (
            <motion.article
              key={l.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-12 gap-10 lg:gap-16 py-16 border-b border-border ${i === 0 ? "border-t" : ""}`}
            >
              <div className="md:col-span-3">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={l.photo}
                    alt={l.name}
                    className="w-full h-full object-cover object-top"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>
              </div>
              <div className="md:col-span-9">
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{l.role}</div>
                <h3 className="font-display text-3xl lg:text-4xl">{l.name}</h3>
                <div className="text-sm text-muted-foreground mt-1 mb-6">{l.creds}</div>
                <div className="space-y-4">
                  {l.bio.trim().split("\n\n").map((para, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#1B3FA0] text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#F5C518]/15 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Work with a <span className="italic text-[#F5C518]">senior</span> team.
          </h2>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto">
            Every engagement is led by a senior consultant. Tell us about your business and we'll match you with the right partner.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#F5C518] text-[#1B3FA0] text-sm font-semibold hover:shadow-gold transition-all">
            Get in touch <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
