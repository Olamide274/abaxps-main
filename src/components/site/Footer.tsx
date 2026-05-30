import { Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream/80 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="text-sm text-cream/60 max-w-sm leading-relaxed">
            A modern firm of Chartered Accountants and Business Advisors delivering Audit & Assurance,
            Tax, Financial Reporting and Management Advisory services. Trusted insight, sustainable growth.
          </p>
          <a
            href="https://www.linkedin.com/company/abax-professional-services"
            target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Explore</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/team" className="hover:text-gold transition-colors">Team</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Services</div>
          <ul className="space-y-2.5 text-sm text-cream/70">
            <li>Audit & Assurance</li>
            <li>Financial Reporting</li>
            <li>Tax Advisory</li>
            <li>Governance & Risk</li>
            <li>Transaction Advisory</li>
            <li>HR Consulting</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Visit</div>
          <p className="text-sm text-cream/70 leading-relaxed">
            No. 2, Ibeju Lekki Street,<br />
            Dolphin Estate, Ikoyi, Lagos
          </p>
          <div className="mt-4 space-y-1.5 text-sm">
            <a href="tel:+2349110108791" className="block hover:text-gold transition-colors">+234 911 010 8791</a>
            <a href="mailto:info@abaxps.com" className="block hover:text-gold transition-colors">info@abaxps.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <span>© {year} Abax Professional Services. All Rights Reserved.</span>
          <span className="uppercase tracking-[0.25em]">Mon — Fri · 9 AM to 5 PM</span>
        </div>
      </div>
    </footer>
  );
}
