import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { getPost, posts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Abax Insights` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.cover },
        ]
      : [],
  }),
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="pt-44 pb-24 max-w-3xl mx-auto px-6 text-center">
      <h1 className="font-display text-5xl">Article not found</h1>
      <Link to="/blog" className="mt-8 inline-flex text-sm border-b border-gold pb-1">Back to all articles</Link>
    </div>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-44 pb-16 bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.cover} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 veil" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-8">
            <span aria-hidden>←</span> Back to insights
          </Link>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{post.category}</div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-6xl leading-[1.05]"
          >
            {post.title}
          </motion.h1>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-cream/70">
            <span>{post.author}</span><span>·</span>
            <span>{post.date}</span><span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <article className="max-w-3xl mx-auto px-6 lg:px-10 space-y-7 text-lg leading-relaxed text-foreground/90">
          {post.content.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
          <div className="pt-10 border-t border-border mt-12">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Written by</div>
            <div className="font-display text-2xl">{post.author}</div>
          </div>
        </article>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 gap-6">
            <h2 className="font-display text-3xl md:text-4xl">More insights</h2>
            <Link to="/blog" className="text-sm border-b border-gold pb-1">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{p.category}</div>
                <h3 className="font-display text-xl leading-tight">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
