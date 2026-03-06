"use client";

import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Interested in our AI pipelines?
            <br />
            <span className="text-spectrum">Let&apos;s talk.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 rounded-full bg-white text-black text-sm font-medium px-8 py-3.5 hover:bg-white/90 transition-colors"
          >
            Connect with us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10m-4-4l4 4-4 4" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
