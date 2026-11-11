import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { noExperience } from "@/lib/site";

export function NoExperience() {
  return (
    <Section id={noExperience.id} className="bg-section-sage">
      <Reveal>
        <SectionHeader
          eyebrow={noExperience.eyebrow}
          title={noExperience.title}
          supporting={noExperience.supporting}
        />
      </Reveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
        {noExperience.points.map((point, index) => (
          <Reveal key={point.title} delay={(index + 1) as 1 | 2 | 3}>
            <div className="border-t border-line-strong pt-6">
              <p className="mb-3 font-display text-sm text-lotus">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-2xl tracking-tight text-ink">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                {point.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
