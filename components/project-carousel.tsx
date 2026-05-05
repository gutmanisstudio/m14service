"use client";

import { useEffect, useState } from "react";
import { caseStudies } from "@/lib/content";

export default function ProjectCarousel() {
  const [i, setI] = useState(0);
  const total = caseStudies.length;

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  const next = () => setI((p) => (p + 1) % total);
  const prev = () => setI((p) => (p - 1 + total) % total);
  const go = (n: number) => setI(n);

  return (
    <section id="projekti" className="bg-off px-5 py-20 md:px-[60px] md:py-[80px]">
      <div className="mx-auto mb-10 max-w-[1200px] sm:mb-12">
        <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy-dark">
          ★ Mūsu projekti
        </span>
        <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink">
          Pabeigti objekti,
          <br />
          <span className="text-brand">kas runā paši par sevi</span>
        </h2>
      </div>

      <div className="relative mx-auto max-w-[920px]">
        {caseStudies.map((c, idx) => (
          <div
            key={c.title}
            className={`${
              idx === i ? "grid" : "hidden"
            } grid-cols-1 overflow-hidden rounded-[20px] border border-line md:grid-cols-[360px_1fr]`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.img}
              alt={c.title}
              className="h-[240px] w-full object-cover sm:h-[280px] md:h-[380px]"
            />
            <div className="flex flex-col justify-center bg-white px-7 py-10 md:px-10 md:py-12">
              <div className="mb-1.5 text-[1.6rem] font-extrabold -tracking-[0.02em] text-ink md:text-[1.8rem]">
                {c.title}
              </div>
              <div className="mb-6 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-burgundy-dark">
                {c.tag}
              </div>
              <p className="mb-7 text-[0.96rem] leading-[1.8] text-mid">
                {c.bio}
              </p>
              <div className="mb-2 grid grid-cols-2 gap-3">
                {c.stats.map((s) => (
                  <div key={s.l} className="rounded-[10px] bg-off-warm px-4 py-3.5">
                    <div className="text-[1.25rem] font-extrabold text-ink">
                      {s.n}
                    </div>
                    <div className="mt-0.5 text-[0.78rem] text-mid">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Iepriekšējais"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-[1.1rem] transition-colors hover:border-burgundy hover:bg-burgundy hover:text-white"
          >
            ←
          </button>
          <div className="flex gap-1.5">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => go(idx)}
                aria-label={`Projekts ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-5 bg-burgundy" : "w-2 bg-line"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Nākamais"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-[1.1rem] transition-colors hover:border-burgundy hover:bg-burgundy hover:text-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
