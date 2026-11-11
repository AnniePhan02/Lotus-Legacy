import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { whyLotus } from "@/lib/site";

export function WhyLotus() {
  return (
    <Section id={whyLotus.id} className="bg-section-petal">
      <Reveal>
        <SectionHeader
          eyebrow={whyLotus.eyebrow}
          title={whyLotus.title}
          supporting={whyLotus.supporting}
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal delay={1}>
          <div className="h-full rounded-2xl border border-line bg-surface-elevated/70 p-7 sm:p-9">
            <h3 className="font-display text-2xl text-ink-soft sm:text-3xl">
              {whyLotus.alone.title}
            </h3>
            <ul className="mt-6 space-y-4">
              {whyLotus.alone.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft sm:text-base"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fog"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="h-full rounded-2xl bg-deep-grove p-7 text-petal sm:p-9">
            <h3 className="font-display text-2xl sm:text-3xl">
              {whyLotus.withUs.title}
            </h3>
            <ul className="mt-6 space-y-4">
              {whyLotus.withUs.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-petal/85 sm:text-base"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-8 border-t border-line pt-12 sm:grid-cols-3">
        {whyLotus.differentiators.map((item, index) => (
          <Reveal key={item.title} delay={(index + 1) as 1 | 2 | 3}>
            <div>
              <h4 className="font-display text-xl text-ink">{item.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
