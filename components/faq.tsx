"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-off px-5 py-20 md:px-[60px] md:py-[80px]">
      <div className="mx-auto max-w-[760px]">
        <h2 className="mb-9 text-[clamp(1.8rem,2.8vw,2.5rem)] font-extrabold -tracking-[0.02em] text-ink">
          Common questions.
        </h2>

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
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-[0.98rem] font-semibold text-ink transition-colors hover:bg-off-warm"
                >
                  <span>{f.q}</span>
                  <span
                    className={`ml-4 text-[1.2rem] text-burgundy transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-[0.92rem] leading-[1.85] text-mid">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
