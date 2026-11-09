type LotusMarkProps = {
  className?: string;
  muted?: boolean;
};

/** Decorative lotus SVG — swap for a brand asset later if desired. */
export function LotusMark({ className = "", muted = false }: LotusMarkProps) {
  const petal = muted ? "var(--fog)" : "var(--lotus)";
  const leaf = muted ? "var(--fog)" : "var(--sage)";
  const center = muted ? "var(--line-strong)" : "var(--champagne)";

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`lotus-mark ${className}`}
      aria-hidden="true"
    >
      <path
        d="M100 170C100 170 52 138 52 98C52 72 72 55 100 42C128 55 148 72 148 98C148 138 100 170 100 170Z"
        fill={leaf}
        opacity="0.35"
      />
      <path
        d="M100 158C100 158 68 132 68 100C68 78 82 64 100 54C118 64 132 78 132 100C132 132 100 158 100 158Z"
        fill={petal}
        opacity="0.9"
      />
      <path
        d="M100 150C78 132 70 108 78 88C86 68 100 58 100 58C100 58 114 68 122 88C130 108 122 132 100 150Z"
        fill={petal}
      />
      <path
        d="M58 118C42 98 44 72 62 58C80 44 100 52 100 52C100 52 88 72 84 94C80 116 70 130 58 118Z"
        fill={petal}
        opacity="0.85"
      />
      <path
        d="M142 118C158 98 156 72 138 58C120 44 100 52 100 52C100 52 112 72 116 94C120 116 130 130 142 118Z"
        fill={petal}
        opacity="0.85"
      />
      <path
        d="M72 72C58 52 64 30 84 24C104 18 118 34 118 34C118 34 98 42 88 56C78 70 78 84 72 72Z"
        fill={leaf}
        opacity="0.55"
      />
      <path
        d="M128 72C142 52 136 30 116 24C96 18 82 34 82 34C82 34 102 42 112 56C122 70 122 84 128 72Z"
        fill={leaf}
        opacity="0.55"
      />
      <circle cx="100" cy="96" r="10" fill={center} />
      <circle cx="100" cy="96" r="4" fill="var(--petal)" />
    </svg>
  );
}
