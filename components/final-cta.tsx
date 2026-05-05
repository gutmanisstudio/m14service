import { company } from "@/lib/content";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand to-ink-soft px-5 py-20 text-center md:px-[60px] md:py-[84px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 85% at 50% 100%, rgba(0,0,0,0.3) 0%, transparent 70%), radial-gradient(ellipse 50% 35% at 80% 0%, rgba(182,183,186,0.28) 0%, transparent 70%)",
        }}
      />
      <h2 className="relative z-10 mb-4 text-[clamp(2.1rem,4.4vw,3.8rem)] font-black leading-[1.05] -tracking-[0.03em] text-white">
        Your clean
        <br />
        <span className="text-burgundy-glow">starts here.</span>
      </h2>
      <p className="relative z-10 mb-9 text-[1.05rem] text-white/65">
        Free quote — share the space and the job, we&apos;ll come back fast.
      </p>
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={`mailto:${company.email}`}
          className="w-full max-w-[340px] rounded-[10px] bg-burgundy px-8 py-3.5 text-[0.96rem] font-bold text-white transition-colors hover:bg-burgundy-dark sm:w-auto sm:px-9"
        >
          {company.email}
        </a>
        <a
          href={`tel:${company.phone.replace(/\s/g, "")}`}
          className="w-full max-w-[340px] rounded-[10px] border-2 border-white/30 px-8 py-3.5 text-[0.96rem] font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-9"
        >
          {company.phone}
        </a>
      </div>
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <span className="text-[0.84rem] tracking-[0.06em] text-white/45">
          ✓ Free quotes
        </span>
        <span className="hidden text-white/25 sm:inline">·</span>
        <span className="text-[0.84rem] tracking-[0.06em] text-white/45">
          ✓ Fully equipped teams
        </span>
        <span className="hidden text-white/25 sm:inline">·</span>
        <span className="text-[0.84rem] tracking-[0.06em] text-white/45">
          ✓ UK-wide
        </span>
      </div>
    </section>
  );
}
