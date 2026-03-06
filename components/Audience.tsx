"use client";

import AnimatedSection from "./AnimatedSection";

export default function Audience() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="rounded-2xl border border-border bg-surface/30 p-8 h-full">
              <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
                Creators &amp; Producers
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Expand creative vision.
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                AI infrastructure that lets creative work travel across
                platforms and audiences. A dedicated pipeline trained on
                production IP.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface/30 p-8 h-full">
              <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
                Brands &amp; Distributors
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Turn content into sustainable IP.
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Archives, stories, and expertise become multi-format products.
                Powered by dedicated pipelines that scale without scaling
                the team.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
