"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  { number: "01", title: "Audit", desc: "Analyse content, formats, and distribution potential." },
  { number: "02", title: "Design", desc: "Architect the pipeline. Inputs, transforms, outputs." },
  { number: "03", title: "Build", desc: "Engineer and train the AI on production content." },
  { number: "04", title: "Scale", desc: "Deploy across platforms, languages, formats." },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
            How it works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-12">
            From audit to scale.
            <br />
            <span className="text-spectrum">Four steps.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="text-xs font-mono text-accent mb-2">{step.number}</div>
                <h3 className="text-lg font-semibold mb-1">{step.title}.</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
