"use client";

import Image from "next/image";
import { productCategories } from "@/lib/content";
import { useQuote } from "./quote-modal";

export default function ServicesEditorial() {
  const { openQuote } = useQuote();

  return (
    <section className="bg-white px-5 py-10 md:px-[60px] md:py-16">
      <div className="mx-auto max-w-[1200px]">
        {productCategories.map((p, i) => {
          const flipped = i % 2 === 1;
          const idx = String(i + 1).padStart(2, "0");
          const isFirst = i === 0;
          return (
            <article
              key={p.slug}
              className={`relative grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-14 ${
                isFirst ? "py-10 md:py-20" : "border-t border-line py-10 md:py-24"
              }`}
            >
              {/* Ghosted background numeral — desktop only */}
              <div
                aria-hidden
                className={`pointer-events-none absolute hidden select-none text-[clamp(8rem,18vw,15rem)] font-black leading-none tracking-tighter text-brand/[0.05] lg:block ${
                  flipped ? "lg:-right-8 lg:top-2" : "lg:-left-8 lg:top-2"
                }`}
              >
                {idx}
              </div>

              {/* Image */}
              <div
                className={`relative z-10 lg:col-span-5 ${
                  flipped ? "lg:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-line shadow-[0_30px_60px_-30px_rgba(8,9,26,0.35)]">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition duration-700 hover:scale-[1.04]"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`relative z-10 lg:col-span-7 ${
                  flipped ? "lg:order-1" : ""
                }`}
              >
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="text-[0.85rem] font-bold tracking-[0.18em] text-brand">
                    {idx}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-soft">
                    {p.sub}
                  </span>
                </div>

                <h2 className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold leading-[1.1] -tracking-[0.02em] text-ink">
                  {p.title}
                </h2>

                <p className="mt-4 max-w-[560px] text-[1.02rem] leading-[1.7] text-mid">
                  {p.blurb}
                </p>

                {p.included && p.included.length > 0 && (
                  <div className="mt-7">
                    <div className="section-tag mb-3">What&apos;s included</div>
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {p.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[0.94rem] text-ink"
                        >
                          <span className="mt-[6px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-pale text-brand">
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden
                            >
                              <path d="M5 12l5 5L20 7" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => openQuote(p.slug)}
                    className="group inline-flex items-center justify-center gap-2 rounded-[10px] bg-brand px-7 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_10px_30px_-10px_rgba(46,49,145,0.6)] transition-colors hover:bg-brand-dark"
                  >
                    Get a quote for {p.title.toLowerCase()}
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
