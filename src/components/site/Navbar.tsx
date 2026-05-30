import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import logoLight from "@/assets/abax-logo-light.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";
  const forceSolid = !isHome;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowScrollTop(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || forceSolid;

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-white/95 backdrop-blur-xl border-b border-[#C8D4F5] text-[#1B3FA0]"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center group" onClick={() => setOpen(false)}>
            <img
              src={logoLight}
              alt="Abax Professional Services"
              className="h-16 w-auto transition-all duration-500 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-sm font-medium opacity-80 hover:opacity-100 transition-opacity group"
                activeProps={{ className: "opacity-100" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#F5C518] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <span className="relative text-sm font-medium opacity-40 cursor-default select-none">
              Blog
            </span>
          </nav>

          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
              solid
                ? "bg-[#1B3FA0] text-white hover:bg-[#F5C518] hover:text-[#1B3FA0]"
                : "bg-[#F5C518] text-[#1B3FA0] hover:bg-white"
            }`}
          >
            Book a consult <span aria-hidden>→</span>
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2"
            aria-label="Menu"
          >
            <span className="relative block w-5 h-px bg-current">
              <span className={`absolute left-0 block w-5 h-px bg-current transition-transform ${open ? "rotate-45 top-0" : "-top-1.5"}`} />
              <span className={`absolute left-0 block w-5 h-px bg-current transition-transform ${open ? "-rotate-45 top-0" : "top-1.5"}`} />
            </span>
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="md:hidden overflow-hidden bg-white text-[#1B3FA0] border-b border-[#C8D4F5]"
        >
          <div className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-base font-medium">
                {l.label}
              </Link>
            ))}
            <span className="block text-base font-medium opacity-40 cursor-default select-none">Blog</span>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-[#F5C518] text-[#1B3FA0]"
            >
              Book a consult →
            </Link>
          </div>
        </motion.div>
      </motion.header>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-[#1B3FA0] text-white flex items-center justify-center shadow-lg hover:bg-[#F5C518] hover:text-[#1B3FA0] transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
