import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  supporting?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  supporting,
  align = "left",
  light = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = light ? "text-petal" : "text-ink";
  const bodyColor = light ? "text-petal/75" : "text-ink-soft";
  const eyeColor = light ? "text-champagne" : "text-sage";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-medium uppercase tracking-[0.22em] ${eyeColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {supporting ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${bodyColor}`}>
          {supporting}
        </p>
      ) : null}
    </div>
  );
}
