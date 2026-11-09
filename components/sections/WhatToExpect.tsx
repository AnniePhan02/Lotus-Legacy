import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { whatToExpect } from "@/lib/site";

export function WhatToExpect() {
  return (
    <Section id={whatToExpect.id}>
      <Reveal>
        <SectionHeader
          eyebrow={whatToExpect.eyebrow}
          title={whatToExpect.title}
          supporting={whatToExpect.supporting}
        />
      </Reveal>

      <ol className="mt-14 grid gap-6 sm:grid-cols-2">
        {whatToExpect.steps.map((step, index) => (
          <Reveal
            key={step.title}
            delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
          >
            <li className="group relative overflow-hidden rounded-2xl bg-mist/70 p-7 transition-colors duration-300 hover:bg-mist sm:p-8">
              <span className="font-display text-4xl text-sage/40 transition-colors group-hover:text-lotus/50">
                {step.label}
              </span>
              <h3 className="mt-4 font-display text-2xl tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                {step.body}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
