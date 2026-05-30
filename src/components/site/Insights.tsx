import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { posts } from "@/data/blog";

export function Insights() {
  const top = posts.slice(0, 3);
  return (
    <section id="insights" className="py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Insights</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              Perspectives from the <span className="italic text-gradient-gold">practice</span>.
            </h2>
          </div>
          <Link to="/blog" className="text-sm uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors">
            All insights →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {top.map((it, i) => (
            <motion.div
              key={it.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="block bg-card p-8 lg:p-10 h-full">
                <div className="flex items-center justify-between mb-12 text-xs uppercase tracking-[0.2em]">
                  <span className="text-gold">{it.category}</span>
                  <span className="text-muted-foreground">{it.date}</span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-8 min-h-[7rem]">{it.title}</h3>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{it.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
