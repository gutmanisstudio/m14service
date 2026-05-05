import { services } from "@/lib/content";

// Section title style (matches reference "How it works" boxes but holds the 6 services grid)
export default function Services() {
  return (
    <section id="services" className="bg-off-warm px-5 py-20 md:px-[60px] md:py-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy-dark">
          ★ Services
        </span>
        <h2 className="mb-10 text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink sm:mb-12">
          Every kind of clean —
          <br />
          <span className="text-brand">under one roof.</span>
        </h2>

        <div className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative bg-white px-6 py-8 md:px-7 md:py-9"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-line transition-colors group-hover:bg-burgundy" />
              <div className="mb-3 text-[2.4rem] font-black leading-none -tracking-[0.03em] text-brand/10">
                {s.num}
              </div>
              <div className="mb-2 text-[0.98rem] font-bold text-ink">
                {s.title}
              </div>
              <div className="text-[0.88rem] leading-[1.7] text-mid">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
