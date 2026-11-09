import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { benefits } from "@/lib/site";

export function Benefits() {
  return (
    <Section id={benefits.id}>
      <Reveal>
        <SectionHeader
          eyebrow={benefits.eyebrow}
          title={benefits.title}
          supporting={benefits.supporting}
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.items.map((item, index) => (
          <Reveal
            key={item.title}
            delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
            className={
              index === benefits.items.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
            }
          >
            <article className="flex h-full flex-col border-t border-line-strong pt-6 transition-colors duration-300">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-lotus">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
