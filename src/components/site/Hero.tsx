import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import heroBoardroom from "@/assets/hero-boardroom.jpg";
import heroTower from "@/assets/hero-tower.jpg";
import heroDesk from "@/assets/hero-desk.jpg";

const slides = [
  {
    image: heroBoardroom,
    eyebrow: "Audit · Tax · Advisory",
    title: ["Trusted insight.", "Sustainable growth."],
    text: "Deep professional expertise paired with practical business experience — solutions that are technically sound, commercially relevant, and built to last.",
  },
  {
    image: heroTower,
    eyebrow: "Strategic Advisory",
    title: ["Precision in every", "decision."],
    text: "Audit, tax, and advisory delivered with integrity and measurable outcomes for ambitious organisations.",
  },
  {
    image: heroDesk,
    eyebrow: "Governance & Risk",
    title: ["Build governance.", "Unlock performance."],
    text: "Strengthen governance, manage risk effectively, and unlock sustainable financial performance with confidence.",
  },
];

// Partner/certification logos displayed as text badges (replace with actual images when available)
const partners = [
  { name: "ICAN", sub: "Fellow Members" },
  { name: "CITN", sub: "Fellow Members" },
  { name: "MSI", sub: "Global Alliance" },
  { name: "ISACA", sub: "Certified Members" },
  { name: "IIA", sub: "Members" },
  { name: "FRC", sub: "Registered Firm" },
  { name: "IRM", sub: "Certified Members" },
  { name: "CIPM", sub: "Members" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <>
      <section ref={ref} id="top" className="relative min-h-screen w-full overflow-hidden bg-[#1B3FA0] text-white">
        {/* Background */}
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          {slides.map((s, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1.05 : 1.15 }}
              transition={{ opacity: { duration: 1.4 }, scale: { duration: 8, ease: "linear" } }}
              className="absolute inset-0"
            >
              <img src={s.image} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
          <div className="absolute inset-0 veil" />
          <div className="absolute inset-0 grain" />
        </motion.div>

        <div className="absolute top-20 inset-x-0 hairline" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-24 min-h-screen flex flex-col justify-between">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-[#F5C518]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#F5C518]">{slide.eyebrow}</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[1.02] tracking-tight">
              {slide.title.map((line, i) => (
                <motion.span
                  key={`${index}-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {i === 1 ? <span className="italic text-[#F5C518]">{line}</span> : line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 max-w-xl text-base lg:text-lg text-white/75 leading-relaxed"
            >
              {slide.text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#F5C518] text-[#1B3FA0] text-sm font-semibold hover:shadow-gold transition-all duration-500"
              >
                Explore our services
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/30 text-sm text-white hover:bg-white hover:text-[#1B3FA0] transition-colors duration-500"
              >
                Speak with a partner
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex items-end justify-between gap-8 mt-16">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="group relative h-px w-16 bg-white/20 overflow-hidden"
                  aria-label={`Slide ${i + 1}`}
                >
                  <motion.span
                    initial={false}
                    animate={{ width: i === index ? "100%" : "0%" }}
                    transition={{ duration: i === index ? 6.5 : 0.3, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-[#F5C518]"
                  />
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
              <span>Scroll</span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="inline-block h-6 w-px bg-white/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner/Certification Logos Strip */}
      <section className="bg-white border-b border-[#C8D4F5] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-[#F5C518]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Professional Memberships & Certifications</span>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="flex flex-col items-center justify-center py-3 px-2 border border-[#C8D4F5] rounded-sm bg-[#EEF2FF] hover:border-[#1B3FA0] transition-colors group">
                <div className="font-display text-xl font-bold text-[#1B3FA0] group-hover:text-[#F5C518] transition-colors">{p.name}</div>
                <div className="text-[9px] uppercase tracking-wide text-muted-foreground mt-1 text-center">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
