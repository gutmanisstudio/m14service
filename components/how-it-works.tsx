const steps = [
  {
    num: "01",
    title: "Bezmaksas konsultācija",
    text:
      "Jūs piesakāt konsultāciju — mūsu inženieris apskata objektu, izvērtē situāciju un noskaidro vajadzības.",
  },
  {
    num: "02",
    title: "Projekts un tāme",
    text:
      "Izstrādājam tehnisko risinājumu un precīzu tāmi. Saskaņojam materiālus, iekārtas un termiņus ar jums.",
  },
  {
    num: "03",
    title: "Izbūve un serviss",
    text:
      "Izbūvējam sistēmu, nododam ekspluatācijā un nodrošinām garantijas un pēcgarantijas apkopi gadiem ilgi.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-ink-soft px-5 py-20 md:px-[60px] md:py-[80px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 15% 0%, rgba(46,49,145,0.32) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(232,162,61,0.10) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy">
          ★ Kā mēs strādājam
        </span>
        <h2 className="mb-10 text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-white sm:mb-12">
          Trīs soļi līdz jūsu
          <br />
          <span className="text-burgundy">gatavai sistēmai</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 backdrop-blur-sm transition hover:border-burgundy/30 hover:bg-white/[0.07] md:px-7 md:py-9"
            >
              <div className="mb-3 text-[2.4rem] font-black leading-none -tracking-[0.03em] text-burgundy/25">
                {s.num}
              </div>
              <div className="mb-2 text-[0.98rem] font-bold text-white">
                {s.title}
              </div>
              <div className="text-[0.88rem] leading-[1.7] text-white/55">{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
