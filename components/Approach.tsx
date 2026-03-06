"use client";

import AnimatedSection from "./AnimatedSection";

const inputs = ["Film", "Podcast", "Archives", "Live Event"];
const outputs = ["Video Series", "3D Experience", "Social", "Podcast"];

export default function Approach() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
            The technology
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Dedicated AI pipelines.
            <br />
            <span className="text-spectrum">Built on ground-truth content.</span>
          </h2>
          <p className="mt-5 text-muted max-w-2xl leading-relaxed">
            Each pipeline is custom-engineered and trained on production IP.
            One input, multiple platform-ready outputs. Automated end to end.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-12 rounded-2xl border border-border bg-surface/30 p-8 md:p-10">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
              <div className="space-y-2.5">
                <div className="text-xs font-medium tracking-widest uppercase text-muted mb-3">Input</div>
                {inputs.map((input) => (
                  <div key={input} className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm">
                    {input}
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="hidden md:block text-muted">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14m-4-4l4 4-4 4" />
                  </svg>
                </div>
                <div className="rounded-xl bg-spectrum-subtle border border-accent/20 px-5 py-3 text-center">
                  <div className="text-[10px] font-medium tracking-widest uppercase text-accent mb-0.5">Pipeline</div>
                  <div className="text-sm font-[family-name:var(--font-source-code)] font-extralight">gotar</div>
                </div>
                <div className="hidden md:block text-muted">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14m-4-4l4 4-4 4" />
                  </svg>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-medium tracking-widest uppercase text-muted mb-3">Output</div>
                {outputs.map((output) => (
                  <div key={output} className="rounded-lg border border-accent/20 bg-accent/5 px-4 py-2.5 text-sm">
                    {output}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { title: "Structure.", desc: "Map content DNA into a modular IP architecture ready for automation." },
              { title: "Automate.", desc: "Custom-trained pipeline transforms a single input into platform-ready outputs." },
              { title: "Scale.", desc: "Deploy across platforms, languages, and formats. One pipeline, unlimited reach." },
            ].map((p) => (
              <div key={p.title}>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
