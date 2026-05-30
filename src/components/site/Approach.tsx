import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBoardroom from "@/assets/hero-boardroom.jpg";

const values = [
  { title: "Integrity", desc: "Highest ethical standards in every engagement." },
  { title: "Excellence", desc: "Work that meets the highest professional standard." },
  { title: "Confidentiality", desc: "Client information held with discretion and care." },
  { title: "Client-Centric", desc: "Long-term partnerships, tailored to your context." },
];

export function Approach() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="approach" className="relative py-28 lg:py-40 bg-ink text-cream overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-gold/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <motion.div style={{ y }} className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={heroBoardroom} alt="Boardroom" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-8 -right-4 lg:-right-12 bg-gold text-gold-foreground p-6 lg:p-8 max-w-[260px] shadow-elevate"
          >
            <p className="font-display text-3xl lg:text-4xl leading-tight">Independent. Diligent. Useful.</p>
          </motion.div>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Our approach</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8"
          >
            Trusted insight. <span className="italic text-gradient-gold">Sustainable</span> growth.
          </motion.h2>
          <p className="text-cream/70 leading-relaxed text-base lg:text-lg max-w-xl mb-10">
            We are a modern firm of Chartered Accountants and Business Advisors — agile, technically strong,
            and committed to helping clients navigate complexity with confidence. Our values shape every engagement.
          </p>

          <div className="grid grid-cols-2 gap-px bg-cream/10 border border-cream/10">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-ink p-6"
              >
                <div className="font-display text-xl lg:text-2xl text-gold mb-2">{v.title}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-cream/60 leading-relaxed">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
