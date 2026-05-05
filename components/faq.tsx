"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/lib/content";
import { useQuote } from "./quote-modal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const { openQuote } = useQuote();

  return (
    <section id="faq" className="bg-off px-5 py-20 md:px-[60px] md:py-[88px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left — title + still-have-questions card */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[120px]">
            <div className="section-tag mb-3">FAQ</div>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink">
              Common questions.
            </h2>
            <p className="mt-4 max-w-[420px] text-[1rem] leading-[1.7] text-mid">
              Quick answers to the things people ask most. If your question
              isn&apos;t here, just message us — we reply fast.
            </p>

            <div className="mt-8 rounded-2xl border border-line bg-white p-5 sm:p-6">
              <h3 className="text-[1rem] font-bold text-ink">
                Still have questions?
              </h3>
              <p className="mt-1.5 text-[0.9rem] leading-[1.6] text-mid">
                Send us the basics and we&apos;ll come back fast.
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => openQuote()}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-brand px-5 py-3 text-[0.92rem] font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  Get a quote →
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[10px] border border-line bg-white px-5 py-3 text-[0.92rem] font-semibold text-ink transition-colors hover:bg-off"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right — accordion */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-line bg-white">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`${i < faqs.length - 1 ? "border-b border-line" : ""}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[0.98rem] font-semibold text-ink transition-colors hover:bg-off-warm sm:px-6"
                  >
                    <span>{f.q}</span>
                    <span
                      aria-hidden
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-pale text-brand transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 text-[0.94rem] leading-[1.8] text-mid sm:px-6">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
