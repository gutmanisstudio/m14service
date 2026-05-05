"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { useQuote } from "./quote-modal";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { openQuote } = useQuote();

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 flex h-[96px] items-center justify-between border-b border-line bg-white/[0.97] px-5 backdrop-blur-xl md:px-[60px]">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex items-center"
          aria-label="M14service"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.jpg"
            alt="M14service"
            className="h-20 w-20 rounded-lg shadow-sm transition-opacity group-hover:opacity-90 md:h-[88px] md:w-[88px]"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.96rem] font-medium text-mid transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openQuote()}
            className="hidden rounded-lg bg-brand px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-brand-dark md:inline-block md:px-6 md:text-[0.94rem]"
          >
            Get a quote →
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="-mr-1 flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-off md:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-[2px] w-6 rounded bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-6 rounded bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-6 rounded bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel + overlay */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[96px] z-30 bg-ink/40 backdrop-blur-sm md:hidden"
          />
          <div
            className="fixed inset-x-0 top-[96px] z-40 max-h-[calc(100dvh-96px)] overflow-y-auto border-b border-line bg-white md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3.5 text-[1.05rem] font-semibold text-ink transition-colors hover:bg-off"
                >
                  {l.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openQuote();
                }}
                className="mt-4 rounded-lg bg-brand px-4 py-4 text-center text-[1.05rem] font-bold text-white transition-colors hover:bg-brand-dark"
              >
                Get a quote →
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
