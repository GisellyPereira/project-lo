export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand${light ? " brand-light" : ""}`}>
      <svg viewBox="0 0 45 48" aria-hidden="true">
        <path d="M22 42C8 32 3 22 6 9c14 0 21 10 16 33Z" fill="currentColor" />
        <path
          d="M23 42c14-10 19-20 16-33-14 0-21 10-16 33Z"
          fill="currentColor"
        />
        <path
          d="M22.5 42V12"
          stroke="var(--brand-cut)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
      <span>nutriviva</span>
    </span>
  );
}
