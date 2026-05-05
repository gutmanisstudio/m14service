"use client";

import { company } from "@/lib/content";
import { useQuote } from "./quote-modal";

export default function Hero() {
  const { openQuote } = useQuote();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink"
    >
      {/* Full-bleed background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />

      {/* Dark navy gradient for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,9,26,0.55) 0%, rgba(8,9,26,0.85) 60%, rgba(8,9,26,0.95) 100%), radial-gradient(ellipse 75% 55% at 50% 0%, rgba(46,49,145,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1200px] flex-col justify-end px-5 pt-32 pb-20 sm:min-h-[90vh] md:px-[60px] md:pt-40 md:pb-28">
        <div className="max-w-[820px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-sky backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-sun" />
            UK cleaning service
          </div>

          <h1 className="text-[clamp(2.6rem,6vw,5rem)] font-black leading-[1.02] -tracking-[0.03em] text-white">
            Where clean meets
            <br />
            <span className="text-sky">perfection.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[1.05rem] leading-[1.7] text-white/75 sm:text-[1.12rem]">
            Home, office, post-renovation and end-of-tenancy cleaning across
            the UK. Fully equipped teams, transparent quotes, and a finish you
            can actually see.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openQuote()}
              className="rounded-[10px] bg-brand px-8 py-4 text-center text-[1rem] font-bold text-white shadow-[0_10px_30px_-8px_rgba(46,49,145,0.6)] transition-colors hover:bg-brand-dark"
            >
              Get a free quote
            </button>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="rounded-[10px] border border-white/15 bg-white/[0.06] px-8 py-4 text-center text-[1rem] font-semibold text-white backdrop-blur transition-colors hover:bg-white/12"
            >
              Call {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
