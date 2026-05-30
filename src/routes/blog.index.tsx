import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { posts } from "@/data/blog";
import heroBoardroom from "@/assets/hero-boardroom.jpg";
import galBoardroom from "@/assets/gallery/boardroom-1.jpg";
import galTeamWork from "@/assets/gallery/team-work-1.jpg";
import galConsult from "@/assets/gallery/consult-1.jpg";
import galTraining from "@/assets/gallery/training-1.jpg";
import galDsc from "@/assets/gallery/dsc-2543.jpg";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insights & Gallery — Abax Professional Services" },
      { name: "description", content: "Perspectives from our partners on audit, tax, advisory, governance, and the changing professional services landscape." },
    ],
  }),
  component: BlogIndex,
});

const gallery = [
  { src: galBoardroom, caption: "Partners' boardroom briefing" },
  { src: galConsult, caption: "Client advisory session" },
  { src: galTraining, caption: "Internal training & development" },
  { src: galTeamWork, caption: "Engagement team at work" },
  { src: heroBoardroom, caption: "Quarterly partners' review" },
  { src: galDsc, caption: "Team at work" },
];

function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Header */}
      <section className="pt-44 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#F5C518]" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Insights</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl"
          >
            Perspectives from <span className="italic text-[#F5C518]">our partners</span>.
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Practical thinking on audit, tax, governance, and the changing landscape of professional services.
          </p>
        </div>
      </section>

      {/* Featured post — display only, not clickable */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative overflow-hidden rounded-sm aspect-[16/10]">
              <img
                src={featured.cover}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#F5C518] text-[#1B3FA0] text-xs uppercase tracking-[0.18em] px-3 py-1.5 font-semibold">
                Featured
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] text-[#F5C518] mb-4">{featured.category}</div>
              <h2 className="font-display text-3xl lg:text-5xl leading-tight">{featured.title}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-[#1B3FA0]/50">Coming soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid — display only, not clickable */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="border-t border-border pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {rest.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-5">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#F5C518] mb-3">{p.category}</div>
                <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <div className="mt-4 text-xs text-muted-foreground">
                  {p.date} · {p.readTime}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#1B3FA0]/50">Coming soon</div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-32 bg-[#1B3FA0] text-white relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#F5C518]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#F5C518]">Gallery</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight mb-12 max-w-3xl">
            Moments from the <span className="italic text-[#F5C518]">practice</span>.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((g, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
                className={`relative overflow-hidden group ${
                  i === 0
                    ? "col-span-2 md:col-span-2 md:row-span-2 aspect-[16/11] md:aspect-auto"
                    : "aspect-[4/5]"
                }`}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: "grayscale(100%)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3FA0] via-[#1B3FA0]/20 to-transparent opacity-80" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.2em] text-white/90">
                  {g.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
