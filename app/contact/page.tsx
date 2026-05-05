import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-modal";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — M14service",
  description:
    "Get a quote from M14service — pick a date, send via WhatsApp or email. UK-wide cleaning service.",
};

export default function ContactPage() {
  const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${company.phone.replace(/\D/g, "")}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the job."
        subtitle="Pick a date that suits you, drop us the basics, and we'll come back fast with a quote."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-off px-5 py-20 md:px-[60px] md:py-[88px]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Form card — left on desktop */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_20px_60px_-30px_rgba(8,9,26,0.25)] sm:p-7">
              <div className="mb-4">
                <div className="section-tag mb-1">Free quote</div>
                <h2 className="text-[1.4rem] font-extrabold -tracking-[0.01em] text-ink sm:text-[1.6rem]">
                  Pick a slot.
                </h2>
              </div>
              <QuoteForm />
            </div>
          </div>

          {/* Direct contact — right on desktop */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
              <div className="section-tag mb-1">Or get in touch</div>
              <h3 className="mb-5 text-[1.25rem] font-extrabold -tracking-[0.01em] text-ink">
                Prefer to message us?
              </h3>

              <ul className="space-y-3 text-[0.95rem]">
                <li>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between rounded-xl border border-line px-4 py-3.5 text-ink transition-colors hover:border-brand hover:bg-brand-pale"
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M12.04 2.5a9.5 9.5 0 0 0-8.2 14.34L2.5 21.5l4.83-1.27A9.5 9.5 0 1 0 12.04 2.5Z" />
                        </svg>
                      </span>
                      <span className="font-semibold">WhatsApp</span>
                    </span>
                    <span className="text-soft">{company.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={phoneHref}
                    className="flex items-center justify-between rounded-xl border border-line px-4 py-3.5 text-ink transition-colors hover:border-brand hover:bg-brand-pale"
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                        </svg>
                      </span>
                      <span className="font-semibold">Phone</span>
                    </span>
                    <span className="text-soft">{company.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center justify-between rounded-xl border border-line px-4 py-3.5 text-ink transition-colors hover:border-brand hover:bg-brand-pale"
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky text-ink">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="m3 7 9 6 9-6" />
                        </svg>
                      </span>
                      <span className="font-semibold">Email</span>
                    </span>
                    <span className="text-soft">{company.email}</span>
                  </a>
                </li>
              </ul>

              <div className="mt-6 rounded-xl bg-off px-4 py-3 text-[0.78rem] leading-[1.55] text-mid">
                We reply during operating hours, usually within a couple of
                hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
