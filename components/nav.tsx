"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, nav } from "@/lib/content";
import { useQuote } from "./quote-modal";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openQuote } = useQuote();
  const pathname = usePathname();

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

  // Detect scroll past the hero so we can shrink + shadow the nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${company.phone.replace(/\D/g, "")}`;

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Utility bar — phone, WhatsApp, IG */}
        <div
          className={`overflow-hidden bg-brand text-white transition-[max-height,opacity] duration-300 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-[44px] opacity-100"
          }`}
        >
          <div className="mx-auto flex h-[36px] max-w-[1280px] items-center justify-between px-5 text-[0.78rem] md:px-[60px]">
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-1.5 font-medium text-white/85 transition-colors hover:text-white"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                {company.phone}
              </a>
              <span className="hidden items-center gap-1.5 text-white/55 sm:inline-flex">
                <span className="h-1 w-1 rounded-full bg-sun" />
                Free quotes · UK-wide
              </span>
            </div>
            <div className="flex items-center gap-1">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12.04 2.5a9.5 9.5 0 0 0-8.2 14.34L2.5 21.5l4.83-1.27A9.5 9.5 0 1 0 12.04 2.5Zm5.55 13.43c-.24.66-1.4 1.27-1.93 1.32-.51.05-1.16.07-1.87-.12a17 17 0 0 1-1.7-.63 13 13 0 0 1-5-4.41c-.37-.51-.97-1.39-.97-2.65s.66-1.88.9-2.13a.94.94 0 0 1 .68-.32h.49c.16 0 .37-.06.58.44l.8 1.94c.07.13.11.29.02.46-.45.9-.93.86-.7 1.25.95 1.6 1.9 2.16 3.32 2.86.24.12.38.1.52-.06l.6-.7c.16-.18.31-.16.52-.09l1.83.86c.21.1.35.15.4.23.05.09.05.51-.19 1.16Z" />
                </svg>
              </a>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav
          className={`flex items-center justify-between border-b border-line bg-white/[0.97] px-5 backdrop-blur-xl transition-all duration-300 md:px-[60px] ${
            scrolled
              ? "h-[72px] shadow-[0_8px_28px_-12px_rgba(8,9,26,0.18)]"
              : "h-[88px]"
          }`}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center"
            aria-label="M14service"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.jpg"
              alt="M14service"
              className={`rounded-lg shadow-sm transition-all duration-300 group-hover:opacity-90 ${
                scrolled ? "h-14 w-14 md:h-16 md:w-16" : "h-16 w-16 md:h-20 md:w-20"
              }`}
            />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`group relative inline-block px-3 py-2 text-[0.95rem] font-medium transition-colors ${
                      active ? "text-ink" : "text-mid hover:text-ink"
                    }`}
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute bottom-1 left-3 right-3 h-[2px] origin-left rounded-full bg-sky transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={phoneHref}
              aria-label="Call M14service"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-brand transition-colors hover:bg-brand-pale md:inline-flex"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => openQuote()}
              className="group hidden items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-[0.92rem] font-semibold text-white shadow-[0_8px_22px_-10px_rgba(46,49,145,0.7)] transition-all hover:bg-brand-dark md:inline-flex md:px-6"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="text-sky"
              >
                <path d="M12.04 2.5a9.5 9.5 0 0 0-8.2 14.34L2.5 21.5l4.83-1.27A9.5 9.5 0 1 0 12.04 2.5Z" />
              </svg>
              Get a quote
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
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
      </div>

      {/* Mobile menu panel + overlay */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[88px] z-30 bg-ink/40 backdrop-blur-sm md:hidden"
          />
          <div
            className="fixed inset-x-0 top-[88px] z-40 max-h-[calc(100dvh-88px)] overflow-y-auto border-b border-line bg-white md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {nav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3.5 text-[1.05rem] font-semibold text-ink transition-colors hover:bg-off"
                >
                  {l.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openQuote();
                }}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-4 text-center text-[1.05rem] font-bold text-white transition-colors hover:bg-brand-dark"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-sky">
                  <path d="M12.04 2.5a9.5 9.5 0 0 0-8.2 14.34L2.5 21.5l4.83-1.27A9.5 9.5 0 1 0 12.04 2.5Z" />
                </svg>
                Get a quote →
              </button>
              <a
                href={phoneHref}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-line px-4 py-3.5 text-[1rem] font-semibold text-ink transition-colors hover:bg-off"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                {company.phone}
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
