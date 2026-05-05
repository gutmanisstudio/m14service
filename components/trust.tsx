import { partners } from "@/lib/content";

// TODO: replace with confirmed numbers once client signs off.
const proofs = [
  { n: "[TODO]", l: "Years in business" },
  { n: "[TODO]", l: "Properties cleaned" },
  { n: "8", l: "Cleaning specialisms" },
];

export default function Trust() {
  return (
    <section className="border-y border-line bg-white px-5 py-20 md:px-[60px] md:py-[80px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-[1fr_1.05fr] md:gap-12">
        {/* Left: pillars + certs + partners */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-3">
            {proofs.map((p) => (
              <div
                key={p.l}
                className="flex flex-col items-center justify-center bg-white px-5 py-7 text-center md:py-8"
              >
                <div className="mb-1.5 text-[1.85rem] font-black leading-none -tracking-[0.02em] text-brand md:text-[2.1rem]">
                  {p.n}
                </div>
                <div className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-mid md:text-[0.82rem]">
                  {p.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="mb-2 text-[0.76rem] font-bold uppercase tracking-[0.18em] text-burgundy">
              ★ Trusted partners
            </div>
            <p className="mb-5 text-[0.94rem] leading-[1.6] text-mid">
              {/* TODO: replace placeholder partner row with real M14service partners or remove the row. */}
              Working with leading product and equipment partners across the
              UK. Fully insured and equipped for every job.
            </p>

            <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-4 sm:gap-3 md:gap-4">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="flex h-[70px] items-center justify-center rounded-xl border border-line bg-white px-4 py-3 transition hover:border-burgundy/40 md:h-[82px] md:px-5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.name}
                    className="max-h-[36px] w-auto max-w-full object-contain md:max-h-[46px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: featured real-work card */}
        <a
          href="#services"
          className="group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl border border-line md:min-h-[360px]"
        >
          {/* TODO: drop a real featured-project photo into /public/images/projects/
              and replace the gradient placeholder below. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-brand to-ink"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent"
          />
          <div className="relative z-10 px-7 pb-7 pt-24 md:px-8 md:pb-8">
            <div className="mb-1.5 text-[0.76rem] font-bold uppercase tracking-[0.18em] text-burgundy-glow">
              ★ Latest project
            </div>
            <div className="mb-2 text-[1.3rem] font-extrabold -tracking-[0.02em] text-white md:text-[1.45rem]">
              [TODO: featured project
              <br />
              title]
            </div>
            <div className="text-[0.88rem] leading-[1.6] text-white/65">
              [TODO: short description of the featured job.]
              <span className="text-white/80"> See all our work →</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
