import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-20 md:px-[60px] md:py-[88px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 30% 0%, rgba(46,49,145,0.4) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 100%, rgba(111,182,226,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {crumbs && crumbs.length > 0 && (
          <div className="mb-5 flex flex-wrap items-center gap-1.5 text-[0.78rem] text-white/55">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="inline-flex items-center gap-1.5">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-white"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/85">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-white/30">/</span>}
              </span>
            ))}
          </div>
        )}

        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-sky backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-sun" />
            {eyebrow}
          </div>
        )}

        <h1 className="text-[clamp(2.2rem,4.6vw,3.8rem)] font-black leading-[1.06] -tracking-[0.02em] text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 max-w-[640px] text-[1.02rem] leading-[1.7] text-white/75">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
