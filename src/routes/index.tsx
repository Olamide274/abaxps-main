import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Approach } from "@/components/site/Approach";
import { Team } from "@/components/site/Team";

import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abax Professional Services — Trusted Insight & Sustainable Growth" },
      { name: "description", content: "Audit, tax, advisory, governance, and financial reporting solutions delivered with professionalism, clarity, and measurable business impact." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Approach />
      <Marquee />
      <Team />

    </>
  );
}
