"use client";

import { useEffect, useMemo, useState } from "react";

const MIN = 50;
const MAX = 500;
const PRICE_PER_M2 = 85; // €/m² rough baseline

function fmt(n: number) {
  return "€" + n.toLocaleString("lv-LV");
}

export default function Calculator() {
  const [size, setSize] = useState(140);

  const total = useMemo(() => Math.round(size * PRICE_PER_M2), [size]);
  const low = Math.round(total * 0.85);
  const high = Math.round(total * 1.2);

  const pct = ((size - MIN) / (MAX - MIN)) * 100;

  // Update slider background fill for browsers that don't style the track.
  const [bg, setBg] = useState(
    `linear-gradient(to right, var(--color-burgundy) 0%, var(--color-burgundy) ${pct}%, var(--color-line) ${pct}%, var(--color-line) 100%)`,
  );
  useEffect(() => {
    setBg(
      `linear-gradient(to right, var(--color-burgundy) 0%, var(--color-burgundy) ${pct}%, var(--color-line) ${pct}%, var(--color-line) 100%)`,
    );
  }, [pct]);

  return (
    <section
      id="kalkulators"
      className="bg-brand-pale px-5 py-20 md:px-[60px] md:py-[80px]"
    >
      <div className="mx-auto grid max-w-[960px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy-dark">
            ★ Izmaksu kalkulators
          </span>
          <h2 className="mb-4 text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink">
            Cik maksās jūsu
            <br />
            <span className="text-brand">apkures sistēma?</span>
          </h2>
          <p className="text-[0.96rem] leading-[1.75] text-mid">
            Aptuvens siltumapgādes sistēmas izmaksu aprēķins atkarībā no
            apkurināmās platības. Precīzu tāmi sagatavojam pēc bezmaksas
            konsultācijas un objekta apskates.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-white p-7 shadow-[0_10px_40px_rgba(10,15,30,0.08)] md:p-9">
          <div className="mb-1.5 text-[0.84rem] font-semibold uppercase tracking-[0.08em] text-mid">
            Aptuvenās izmaksas
          </div>
          <div className="mb-7 text-[2.6rem] font-black leading-none -tracking-[0.03em] text-ink">
            <span className="bg-gradient-to-r from-brand to-burgundy-dark bg-clip-text text-transparent">
              {fmt(total)}
            </span>
          </div>

          <div className="mb-2 flex justify-between text-[0.84rem] text-mid">
            <span>Apkurināmā platība</span>
            <span className="font-semibold text-ink">{size} m²</span>
          </div>

          <input
            type="range"
            className="calc-slider mb-2"
            min={MIN}
            max={MAX}
            step={5}
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            style={{ background: bg }}
          />

          <div className="flex justify-between text-[0.74rem] text-soft">
            <span>50 m²</span>
            <span>150 m²</span>
            <span>300 m²</span>
            <span>500 m²</span>
          </div>

          <div className="mt-6 flex items-center justify-between rounded-[10px] border border-burgundy/25 bg-burgundy-pale px-4 py-3">
            <div className="text-[0.84rem] text-mid">
              Diapazons pie €{PRICE_PER_M2}/m²
            </div>
            <div className="text-[1.05rem] font-extrabold text-burgundy-dark">
              {fmt(low)}–{fmt(high)}
            </div>
          </div>

          <a
            href="#contact"
            className="mt-4 block w-full rounded-[10px] bg-brand py-3.5 text-center text-[0.92rem] font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Saņemt precīzu tāmi →
          </a>
        </div>
      </div>
    </section>
  );
}
