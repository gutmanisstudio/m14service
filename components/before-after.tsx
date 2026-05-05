import Image from "next/image";
import { beforeAfter } from "@/lib/content";

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="relative overflow-hidden bg-ink px-5 py-14 md:px-[60px] md:py-[88px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 0%, rgba(46,49,145,0.28) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(111,182,226,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto mb-10 max-w-[1200px] md:mb-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="section-tag mb-3 text-sky">Before / after</div>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-white">
              The difference, side by side.
            </h2>
          </div>
          <p className="max-w-[420px] text-[1rem] leading-[1.7] text-white/60 md:text-right">
            One job, two photos. No filters, no edits — just the result.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-ink-soft">
          <Image
            src={beforeAfter.before.src}
            alt={beforeAfter.before.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-ink/80 px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
            Before
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-ink-soft">
          <Image
            src={beforeAfter.after.src}
            alt={beforeAfter.after.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-sky px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
