import { company } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink px-5 pt-20 pb-20 text-center sm:pt-24 sm:pb-24 md:px-[60px] md:pt-28 md:pb-24"
    >
      {/* TODO: drop a real M14service hero photo into /public/images/projects/ and
          re-enable the background image div below. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,9,26,0.35) 0%, rgba(8,9,26,0.85) 100%), radial-gradient(ellipse 75% 55% at 50% 0%, rgba(46,49,145,0.45) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 85% 80%, rgba(109,110,112,0.30) 0%, transparent 70%)",
        }}
      />

      <span className="relative z-10 mb-7 inline-flex items-center gap-2 rounded-full border border-burgundy/50 bg-burgundy/15 px-4 py-1.5 text-[0.82rem] font-semibold uppercase tracking-[0.05em] text-burgundy-glow sm:text-[0.84rem]">
        ★ Professional cleaning · UK
      </span>

      <h1 className="relative z-10 mb-7 text-[clamp(2.3rem,5.5vw,4.8rem)] font-black leading-[1.02] -tracking-[0.03em] text-white">
        Where clean meets
        <br />
        <span className="text-burgundy-glow">perfection.</span>
      </h1>

      <div className="relative z-10 mx-auto mb-12 flex flex-col items-center gap-7 sm:gap-6">
        <div className="flex max-w-[560px] items-start gap-3 text-left">
          <span
            aria-hidden
            className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy-glow"
          />
          <p className="text-[1rem] font-medium leading-[1.7] text-white/80 sm:text-[1.08rem]">
            Carpet, hard floor, upholstery and high-level cleaning
            <br />
            for homes, offices, factories and warehouses —
            <br />
            done properly, top to bottom.
          </p>
        </div>

        <div className="flex max-w-[560px] items-start gap-3 text-left">
          <span
            aria-hidden
            className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy-glow"
          />
          <p className="text-[1rem] font-medium leading-[1.7] text-white/80 sm:text-[1.08rem]">
            Free quotes, fully equipped teams,
            <br />
            and a finish you can actually see.
          </p>
        </div>
      </div>

      <div className="relative z-10 mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#contact"
          className="w-full max-w-[340px] rounded-[10px] bg-burgundy px-9 py-4 text-center text-[1.02rem] font-bold text-white shadow-[0_10px_30px_-8px_rgba(109,110,112,0.6)] transition-colors hover:bg-burgundy-dark sm:w-auto"
        >
          Get a free quote
        </a>
        <a
          href={`tel:${company.phone.replace(/\s/g, "")}`}
          className="w-full max-w-[340px] rounded-[10px] border border-white/15 bg-white/10 px-9 py-4 text-center text-[1.02rem] font-semibold text-white transition-colors hover:bg-white/15 sm:w-auto"
        >
          Call {company.phone}
        </a>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <span className="text-[0.85rem] tracking-[0.05em] text-white/45">
          ✓ Carpet & upholstery
        </span>
        <span className="hidden text-burgundy/50 sm:inline">★</span>
        <span className="text-[0.85rem] tracking-[0.05em] text-white/45">
          ✓ Hard floor polishing
        </span>
        <span className="hidden text-burgundy/50 sm:inline">★</span>
        <span className="text-[0.85rem] tracking-[0.05em] text-white/45">
          ✓ Industrial & high-level
        </span>
      </div>
    </section>
  );
}
