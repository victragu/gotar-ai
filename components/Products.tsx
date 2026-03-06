"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const productions = [
  {
    title: "Time Travel",
    type: "Immersive Series",
    description:
      "A proprietary pipeline that ingests historical archives, structures narrative arcs, and outputs immersive 3D episodes.",
    tags: ["Archives \u2192 3D", "Storytelling", "Automated Editing"],
    image: "/time-travel.png",
  },
  {
    title: "Crafting Crimes",
    type: "Multi-platform Podcast",
    description:
      "One XR concept, transformed into a podcast franchise across Spotify, YouTube, and social. Each format adapted by a dedicated pipeline.",
    tags: ["XR \u2192 Podcast", "Interactive", "Multi-platform"],
    image: "/crafting-crimes.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
            Pipeline-driven productions
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            Powered by <span className="font-[family-name:var(--font-source-code)] font-extralight">gotar</span>.
            <br />
            <span className="text-spectrum">Distributed everywhere.</span>
          </h2>
          <div className="mb-12" />
        </AnimatedSection>

        <div className="grid gap-6">
          {productions.map((prod, i) => (
            <AnimatedSection key={prod.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-border overflow-hidden bg-surface/30 transition-all hover:border-accent/30">
                <div className="flex flex-col md:flex-row">
                  {/* Thumbnail */}
                  <div className="md:w-80 lg:w-96 shrink-0 relative overflow-hidden aspect-video md:aspect-auto">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-xs font-medium tracking-widest uppercase text-accent mb-2">
                      {prod.type}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {prod.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-4 max-w-lg text-sm">
                      {prod.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {prod.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium tracking-wide uppercase text-accent/80 bg-accent/10 rounded-full px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
