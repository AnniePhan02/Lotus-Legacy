import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & (
  | ({ href: string } & ComponentPropsWithoutRef<"a">)
  | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
);

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-petal hover:bg-sage-deep focus-visible:ring-lotus",
  secondary:
    "bg-transparent text-ink border border-line-strong hover:border-ink hover:bg-ink/5 focus-visible:ring-sage",
  ghost:
    "bg-transparent text-ink-soft hover:text-ink hover:bg-ink/5 focus-visible:ring-sage",
  onDark:
    "bg-petal text-ink hover:bg-white focus-visible:ring-champagne",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variants[variant],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ComponentPropsWithoutRef<"button">;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
