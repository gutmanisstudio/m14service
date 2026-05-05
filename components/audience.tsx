export default function Audience() {
  return (
    <section className="bg-brand-pale px-5 py-20 md:px-[60px] md:py-[80px]">
      <div className="mx-auto max-w-[1200px]">
      <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy-dark">
        ★ Kam mēs strādājam
      </span>
      <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink">
        Privātmājām un{" "}
        <span className="text-brand">komercobjektiem.</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2">
        {/* Private */}
        <div className="relative overflow-hidden rounded-2xl border border-line bg-white px-7 py-9 md:px-9 md:py-10">
          <span className="mb-4 block text-[0.76rem] font-bold uppercase tracking-[0.2em] text-burgundy-dark">
            Privātklientiem
          </span>
          <h3 className="mb-3 text-[1.5rem] font-extrabold leading-[1.2] -tracking-[0.02em] text-ink md:text-[1.6rem]">
            Silta māja. Droša sistēma.
          </h3>
          <p className="mb-6 text-[0.95rem] leading-[1.8] text-mid">
            No jaunbūves līdz renovācijai — mēs uzstādām mūsdienīgas apkures,
            ventilācijas un ūdensapgādes sistēmas, kas strādā tieši jūsu mājai.
          </p>
          <ul className="mb-8 flex list-none flex-col gap-2.5">
            {[
              "Siltumsūkņi un katlu mājas",
              "Grīdas un radiatoru apkure",
              "Ventilācija ar rekuperāciju",
              "Ūdensapgāde un kanalizācija",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-2.5 text-[0.92rem] text-mid"
              >
                <span className="font-bold text-success">✓</span> {t}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-ink px-7 py-3.5 text-[0.9rem] font-bold text-white transition-colors hover:bg-ink/90"
          >
            Saņemt tāmi →
          </a>
        </div>

        {/* Commercial */}
        <div className="relative overflow-hidden rounded-2xl border border-brand bg-gradient-to-br from-brand to-ink-soft px-7 py-9 md:px-9 md:py-10">
          <span className="mb-4 block text-[0.76rem] font-bold uppercase tracking-[0.2em] text-burgundy">
            Komercobjektiem
          </span>
          <h3 className="mb-3 text-[1.5rem] font-extrabold leading-[1.2] -tracking-[0.02em] text-white md:text-[1.6rem]">
            Rūpnīcām, birojiem, veikaliem.
          </h3>
          <p className="mb-6 text-[0.95rem] leading-[1.8] text-white/65">
            Projektējam un izbūvējam apjomīgas inženiersistēmas ar precīziem
            termiņiem un nodošanu ekspluatācijā. Viss cikls — no projekta līdz
            servisam.
          </p>
          <ul className="mb-8 flex list-none flex-col gap-2.5">
            {[
              "Katlu mājas un siltumtrases",
              "Rūpnieciskā ventilācija",
              "Gāzes apgāde un pieslēgumi",
              "Garantijas un pēcgarantijas serviss",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-2.5 text-[0.92rem] text-white/75"
              >
                <span className="font-bold text-green-300">✓</span> {t}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-burgundy px-7 py-3.5 text-[0.9rem] font-bold text-white transition-colors hover:bg-burgundy-dark"
          >
            Sazināties →
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
