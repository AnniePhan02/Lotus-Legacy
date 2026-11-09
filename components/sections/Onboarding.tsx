import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { onboarding } from "@/lib/site";

export function Onboarding() {
  return (
    <Section id={onboarding.id} className="bg-section-sage">
      <Reveal>
        <SectionHeader
          eyebrow={onboarding.eyebrow}
          title={onboarding.title}
          supporting={onboarding.supporting}
        />
      </Reveal>

      <ol className="relative mt-14 space-y-0">
        <div
          className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-line-strong sm:left-1/2 sm:-translate-x-px"
          aria-hidden="true"
        />
        {onboarding.steps.map((step, index) => {
          const isEven = index % 2 === 1;
          return (
            <Reveal key={step.title} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
              <li className="relative grid gap-4 py-8 sm:grid-cols-2 sm:gap-12">
                <div
                  className={`pl-12 sm:pl-0 ${
                    isEven ? "sm:col-start-2" : "sm:col-start-1 sm:text-right"
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage">
                    Step {step.step}
                  </p>
                  <h3 className="mt-2 font-display text-3xl tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed text-ink-soft sm:text-base ${
                      isEven ? "" : "sm:ml-auto sm:max-w-md"
                    }`}
                  >
                    {step.body}
                  </p>
                </div>
                <span
                  className="absolute top-10 left-3 flex h-5 w-5 items-center justify-center rounded-full border border-line-strong bg-surface sm:left-1/2 sm:-translate-x-1/2"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-lotus" />
                </span>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
