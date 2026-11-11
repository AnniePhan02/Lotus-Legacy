import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { apply, site } from "@/lib/site";

export function ApplyCTA() {
  return (
    <Section id={apply.id} className="bg-deep-grove py-24 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-champagne">
            {site.name}
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-petal sm:text-5xl md:text-6xl">
            {apply.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-petal/75 sm:text-lg">
            {apply.supporting}
          </p>

          <ul className="mx-auto mt-10 grid max-w-lg gap-3 text-left sm:grid-cols-2">
            {apply.perks.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-3 text-sm text-petal/85"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne"
                  aria-hidden="true"
                />
                {perk}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button
              href={site.applyUrl}
              variant="onDark"
              className="min-w-[200px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {apply.cta}
            </Button>
            <p className="text-xs tracking-wide text-petal/50">{apply.note}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
