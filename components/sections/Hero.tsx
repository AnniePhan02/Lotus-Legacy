import { LotusMark } from "@/components/LotusMark";
import { Button } from "@/components/ui/Button";
import { hero, site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-lotus-mesh pt-28 pb-16 sm:items-center sm:pb-24"
    >
      {/* Full-bleed atmospheric visual plane */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -right-[18%] top-[-8%] h-[75vmin] w-[75vmin] opacity-90 animate-float sm:right-[-8%] sm:top-[2%]">
          <LotusMark className="h-full w-full opacity-80" />
        </div>
        <div className="absolute -left-[20%] bottom-[-10%] h-[50vmin] w-[50vmin] opacity-40">
          <LotusMark className="h-full w-full" muted />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(250,248,246,0.92)_0%,rgba(250,248,246,0.72)_42%,rgba(250,248,246,0.28)_70%,rgba(246,238,235,0.15)_100%)] sm:bg-[linear-gradient(105deg,rgba(250,248,246,0.94)_0%,rgba(250,248,246,0.78)_38%,rgba(250,248,246,0.35)_65%,transparent_100%)]" />
        <div className="absolute -right-[12%] top-[18%] h-[40vmin] w-[40vmin] rounded-full bg-lotus/20 blur-3xl" />
        <div className="absolute -left-[8%] bottom-[8%] h-[35vmin] w-[35vmin] rounded-full bg-sage/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl animate-rise">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-sage">
            {site.tagline}
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            {hero.brand}
          </h1>
          <p className="mt-5 max-w-md font-display text-2xl leading-snug text-ink-soft sm:text-3xl">
            {hero.headline}
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft/90 sm:text-lg">
            {hero.supporting}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={site.applySectionId} className="w-full sm:w-auto">
              {hero.cta}
            </Button>
            <Button
              href={hero.secondaryHref}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
