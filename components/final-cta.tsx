import { company } from "@/lib/content";

export default function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-brand to-ink-soft px-5 py-20 text-center md:px-[60px] md:py-[84px]"
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
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={`mailto:${company.email}`}
          className="w-full max-w-[340px] rounded-[10px] bg-sky px-8 py-3.5 text-[0.96rem] font-bold text-ink transition-colors hover:bg-white sm:w-auto sm:px-9"
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
    </section>
  );
}
