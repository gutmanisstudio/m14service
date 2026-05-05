import { productCategories } from "@/lib/content";

export default function Products() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-ink px-5 py-20 md:px-[60px] md:py-[80px]"
    >
      {/* subtle brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(46,49,145,0.32) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(109,110,112,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto mb-12 max-w-[1200px] md:mb-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy-glow">
              ★ What we clean
            </span>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-white">
              From carpets to factory floors —
              <br />
              <span className="text-burgundy-glow">cleaned to a finish.</span>
            </h2>
          </div>
          <p className="max-w-[360px] text-[0.98rem] leading-[1.7] text-white/60">
            Carpets, hard floors, upholstery and high-level cleaning — for
            homes, offices, factories and warehouses across the UK.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {productCategories.map((p) => (
          <a
            key={p.slug}
            href="#contact"
            className="group relative flex h-[360px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-ink-soft md:h-[400px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.img}
              alt={p.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            {/* Gradient only at the bottom — keeps the photo fully visible up top */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 via-50% to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] bg-burgundy/0 transition group-hover:bg-burgundy-glow"
            />

            <div className="relative z-10 px-6 pb-6 pt-20 md:px-7 md:pb-7">
              <div className="mb-1 text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-burgundy-glow">
                {p.sub}
              </div>
              <h3 className="mb-2 text-[1.35rem] font-extrabold -tracking-[0.02em] text-white md:text-[1.5rem]">
                {p.title}
              </h3>
              <p className="mb-4 text-[0.9rem] leading-[1.6] text-white/70">
                {p.blurb}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-bold text-white transition group-hover:text-burgundy-glow">
                Learn more <span className="transition group-hover:translate-x-0.5">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-[1200px] flex-wrap items-center justify-center gap-4 sm:mt-12">
        <a
          href="#contact"
          className="rounded-[10px] bg-burgundy px-8 py-3.5 text-[0.95rem] font-bold text-white transition-colors hover:bg-burgundy-dark"
        >
          Get a free quote
        </a>
        <a
          href="#solutions"
          className="rounded-[10px] border border-white/15 bg-white/5 px-8 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-white/10"
        >
          See solutions
        </a>
      </div>
    </section>
  );
}
