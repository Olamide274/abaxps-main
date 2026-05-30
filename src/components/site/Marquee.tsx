const items = [
  "Trusted insight",
  "Sustainable growth",
  "Audit & Assurance",
  "Tax Management",
  "Governance & Risk",
  "Financial Reporting",
  "Management Advisory",
  "Integrity",
  "Excellence",
  "Confidentiality",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden bg-ink text-cream py-8 border-y border-cream/10">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-10 px-6 font-display text-2xl md:text-4xl text-cream/80">
            {it}
            <span className="inline-block w-2 h-2 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
