"use client";

import AnimatedSection from "./AnimatedSection";

export default function Problem() {
  return (
    <section id="concept" className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
            AI amplifying creativity
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            One story.
            <br />
            <span className="text-spectrum">Cross-platform, powered by AI.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            <span className="font-[family-name:var(--font-source-code)] font-extralight">gotar</span> is the
            proprietary AI architecture that powers our productions. It lets
            content flow across platforms, formats, and audiences. More
            distribution, more reach, more impact.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-surface/50 p-8">
              <div className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
                Traditional
              </div>
              <h3 className="text-xl font-semibold mb-3">Static content.</h3>
              <ul className="space-y-2 text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#x2715;</span>
                  One format, one platform, one audience
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#x2715;</span>
                  Manual rework for every adaptation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#x2715;</span>
                  Limited reach, linear effort
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
              <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
                With <span className="font-[family-name:var(--font-source-code)] font-extralight normal-case">gotar</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Liquid content.</h3>
              <ul className="space-y-2 text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#x2713;</span>
                  Flows across every platform and format
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#x2713;</span>
                  Dedicated pipeline trained on production IP
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#x2713;</span>
                  Wider distribution, wider audiences
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
