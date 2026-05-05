"use client";

import Image from "next/image";
import { productCategories } from "@/lib/content";
import { useQuote } from "./quote-modal";

export default function Products() {
  const { openQuote } = useQuote();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-ink px-5 py-20 md:px-[60px] md:py-[88px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(46,49,145,0.3) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(111,182,226,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto mb-12 max-w-[1200px] md:mb-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="section-tag mb-3 text-sky">Our services</div>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-white">
              What we clean.
            </h2>
          </div>
          <p className="max-w-[420px] text-[1rem] leading-[1.7] text-white/60 md:text-right">
            Homes, offices, hotels and short-lets across the UK. Tell us the
            space and the job — we&apos;ll come back fast with a quote.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {productCategories.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => openQuote(p.slug)}
            className="group relative flex h-[360px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-ink-soft text-left md:h-[400px]"
          >
            <Image
              src={p.img}
              alt={p.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 via-45% to-ink/30"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] bg-sky/0 transition group-hover:bg-sky"
            />

            <div className="relative z-10 px-6 pb-6 pt-20 md:px-7 md:pb-7">
              <div className="mb-1 text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-sky">
                {p.sub}
              </div>
              <h3 className="mb-2 text-[1.35rem] font-extrabold -tracking-[0.02em] text-white md:text-[1.5rem]">
                {p.title}
              </h3>
              <p className="mb-4 text-[0.9rem] leading-[1.6] text-white/85">
                {p.blurb}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-bold text-white transition group-hover:text-sky">
                Get a quote{" "}
                <span className="transition group-hover:translate-x-0.5">→</span>
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
