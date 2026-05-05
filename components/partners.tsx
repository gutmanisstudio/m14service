import { partners } from "@/lib/content";

export default function Partners() {
  return (
    <section className="border-b border-line bg-white px-5 py-20 md:px-[60px] md:py-[80px]">
      <div className="mx-auto mb-10 max-w-[1200px] text-center md:mb-12">
        <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy-dark">
          ★ Sadarbības partneri
        </span>
        <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink">
          Tikai uzticamas markas,
          <br />
          <span className="text-brand">kuras pazīstat paši.</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-2 items-center gap-x-6 gap-y-6 md:grid-cols-4 md:gap-x-4">
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex h-[110px] items-center justify-center rounded-2xl border border-line bg-off-warm px-6 py-7 transition hover:border-burgundy/40 hover:bg-white md:h-[130px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.name}
              className="max-h-[52px] w-auto max-w-full object-contain md:max-h-[60px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
