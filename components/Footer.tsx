import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-2xl text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-ink-soft">{site.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-ink-soft sm:items-end">
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
          <p className="text-ink-soft/70">
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
