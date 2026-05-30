import { motion } from "framer-motion";
import sofowora from "@/assets/team/sofowora.jpg";
import alamutu from "@/assets/team/alamutu.jpg";
import ajibade from "@/assets/team/ajibade.jpg";
import akinkugbe from "@/assets/team/akinkugbe.webp";
import ebele from "@/assets/team/ebele.jpg";
import osoneye from "@/assets/team/osoneye.jpg";

const team = [
  {
    name: "Olapeju E. Sofowora",
    role: "Principal Consultant",
    title: "Founding Partner",
    creds: "B.Sc, FCA, FCIT, CISA",
    bio: "30+ years across audit, tax, corporate finance and advisory. Began at Coopers & Lybrand (now PwC), held senior banking roles, and was Managing Partner at Abax-OOSA Professionals for 17+ years.",
    photo: sofowora,
  },
  {
    name: "Ayo Alamutu",
    role: "Senior Consultant",
    title: "Governance & Risk",
    creds: "B.Sc, FCA, CISA, CIRM",
    bio: "Governance, risk, audit and compliance executive with 30+ years across the UK and Nigeria. Vice Chair, IRM Nigeria Regional Group and Board member, Institute of Internal Auditors.",
    photo: alamutu,
  },
  {
    name: "Babafunke Ajibade",
    role: "Senior Consultant",
    title: "Audit & Assurance",
    creds: "B.Sc, FCA, CPFA",
    bio: "Three decades across private, government and third-sector audit in Nigeria and the UK. Specialist in quality control on assurance audits and compliance with international standards.",
    photo: ajibade,
  },
  {
    name: "Fusi Akinkugbe",
    role: "Senior Consultant",
    title: "Financial Services",
    creds: "B.Sc, FCA",
    bio: "Nearly four decades across professional practice, corporate leadership and the public sector. Pioneer Managing Director / CEO of Chrysalis Ltd, with deep expertise in governance and forensic engagements.",
    photo: akinkugbe,
  },
  {
    name: "Anthony Ebele",
    role: "Head",
    title: "Tax Management & Advisory",
    creds: "HND, ACTI",
    bio: "Leads our tax practice across corporate income tax, VAT, withholding tax, transfer pricing, and tax controversy support.",
    photo: ebele,
  },
  {
    name: "Dare Osoneye",
    role: "Head",
    title: "Human Resources Consulting",
    creds: "BSc, MSc, SHRM-CP, ACIPM",
    bio: "Heads our HR consulting practice with expertise in organisation design, reward, performance management, and HR policy frameworks.",
    photo: osoneye,
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-28 lg:py-40 bg-[#F7F8FC]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-10 mb-20"
        >
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our team</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Senior practitioners. <span className="italic text-gradient-gold">Partner-led</span> engagements.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Every assignment is led personally by a senior consultant — bringing decades of hands-on
              expertise and accountability to the work we deliver.
            </p>
          </div>
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-[#E8EDF8]"
            >
              {/* Gold accent top bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#1B3FA0] via-[#F5C518] to-[#1B3FA0]" />

              <div className="p-8 flex flex-col items-center text-center">
                {/* Circular photo */}
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-[#1B3FA0] via-[#F5C518] to-[#1B3FA0] shadow-lg">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#E8EDF8]">
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  {/* Small gold dot badge */}
                  <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#F5C518] border-2 border-white" />
                </div>

                {/* Name */}
                <h3 className="font-display text-lg lg:text-xl font-semibold text-[#0D1B3E] leading-tight mb-1">
                  {m.name}
                </h3>

                {/* Role pill */}
                <div className="inline-flex items-center gap-1.5 bg-[#EEF2FB] text-[#1B3FA0] text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-1">
                  {m.role}
                </div>

                {/* Title */}
                <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                  {m.title}
                </p>

                {/* Credentials */}
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4 font-medium">
                  {m.creds}
                </p>

                {/* Divider */}
                <div className="w-10 h-px bg-[#F5C518] mb-4" />

                {/* Bio */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {m.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
