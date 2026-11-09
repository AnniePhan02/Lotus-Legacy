import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { faq, site } from "@/lib/site";

export function FAQ() {
  return (
    <Section id={faq.id} className="bg-section-petal">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionHeader
              eyebrow={faq.eyebrow}
              title={faq.title}
              supporting={faq.supporting}
            />
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-10 rounded-2xl bg-deep-grove p-7 text-petal sm:p-8">
              <h3 className="font-display text-2xl">{faq.contact.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-petal/75">
                {faq.contact.body}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-flex flex-wrap items-center gap-2 text-sm font-medium text-champagne transition-colors hover:text-petal"
              >
                <span>{faq.contact.emailLabel}</span>
                <span aria-hidden="true">→</span>
                <span className="underline decoration-champagne/40 underline-offset-4">
                  {site.email}
                </span>
              </a>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-petal/60">
                <a
                  href={site.social.tiktok}
                  className="hover:text-petal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
                <a
                  href={site.social.instagram}
                  className="hover:text-petal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <div className="divide-y divide-line border-b border-line">
            {faq.items.map((item, index) => (
              <details
                key={item.question}
                className="group py-1"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                    {item.question}
                  </span>
                  <span
                    className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line text-sage transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 pr-10 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
