import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logoLight from "@/assets/abax-logo-light.png";

export function IntroOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // lock scroll while intro plays
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink overflow-hidden"
        >
          {/* radial gold glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--gold) 30%, transparent) 0%, transparent 55%)",
            }}
          />

          {/* sweeping gold beam */}
          <motion.div
            initial={{ x: "-120%", skewX: -20, opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.7, 0] }}
            transition={{ duration: 1.6, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-y-0 w-[40vw]"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 60%, transparent), transparent)",
            }}
          />

          {/* hairlines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[18%] left-0 right-0 h-px origin-left"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 70%, transparent), transparent)",
            }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[18%] left-0 right-0 h-px origin-right"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 70%, transparent), transparent)",
            }}
          />

          {/* logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ scale: 1.15, opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-6 px-6"
          >
            <motion.img
              src={logoLight}
              alt="Abax Professional Services"
              className="h-24 sm:h-32 lg:h-40 w-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold">
                Audit · Tax · Advisory
              </span>
              <span className="h-px w-10 bg-gold" />
            </motion.div>
          </motion.div>

          {/* curtain reveal */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "-100%", transition: { duration: 1, ease: [0.85, 0, 0.15, 1] } }}
            className="absolute inset-0 -z-0 bg-ink"
            style={{ pointerEvents: "none" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
