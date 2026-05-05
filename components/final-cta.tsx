"use client";

import { company } from "@/lib/content";
import { useQuote } from "./quote-modal";

export default function FinalCta() {
  const { openQuote } = useQuote();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-brand to-ink-soft px-5 py-14 text-center md:px-[60px] md:py-[84px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 85% at 50% 100%, rgba(0,0,0,0.3) 0%, transparent 70%), radial-gradient(ellipse 50% 35% at 80% 0%, rgba(182,183,186,0.28) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-sky backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-sun" />
        Free quote
      </div>
      <h2 className="relative z-10 mb-4 text-[clamp(2.1rem,4.4vw,3.8rem)] font-black leading-[1.05] -tracking-[0.03em] text-white">
        Your clean
        <br />
        <span className="text-sky">starts here.</span>
      </h2>
      <p className="relative z-10 mx-auto mb-9 max-w-[520px] text-[1.05rem] text-white/70">
        Tell us the space and the job — we&apos;ll come back fast with a
        no-obligation quote.
      </p>

      <div className="relative z-10 flex justify-center">
        <button
          type="button"
          onClick={() => openQuote()}
          className="w-full max-w-[420px] rounded-[10px] bg-sky px-8 py-4 text-[1rem] font-bold text-ink transition-colors hover:bg-white sm:w-auto sm:px-12"
        >
          Get a quote →
        </button>
      </div>

      <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-2 text-[0.9rem] text-white/70 sm:flex-row sm:gap-6">
        <a
          href={`tel:${company.phone.replace(/\s/g, "")}`}
          className="transition-colors hover:text-white"
        >
          {company.phone}
        </a>
        <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
        <a
          href={`mailto:${company.email}`}
          className="transition-colors hover:text-white"
        >
          {company.email}
        </a>
      </div>
    </section>
  );
}
