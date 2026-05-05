"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { company, productCategories } from "@/lib/content";

/* -------------------- Context -------------------- */

type QuoteContextShape = {
  open: boolean;
  serviceSlug: string | null;
  openQuote: (serviceSlug?: string) => void;
  closeQuote: () => void;
};

const QuoteContext = createContext<QuoteContextShape | null>(null);

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx)
    throw new Error("useQuote must be used inside <QuoteProvider>");
  return ctx;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);

  const openQuote = useCallback((slug?: string) => {
    setServiceSlug(slug ?? null);
    setOpen(true);
  }, []);

  const closeQuote = useCallback(() => setOpen(false), []);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuote();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeQuote]);

  const value = useMemo(
    () => ({ open, serviceSlug, openQuote, closeQuote }),
    [open, serviceSlug, openQuote, closeQuote]
  );

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteModal />
    </QuoteContext.Provider>
  );
}

/* -------------------- Helpers -------------------- */

const PROPERTY_SIZES = [
  "Studio",
  "1 bedroom",
  "2 bedroom",
  "3 bedroom",
  "4+ bedroom",
  "Office (small)",
  "Office (large)",
  "Other / not sure",
];

const TIME_SLOTS = [
  { value: "morning", label: "Morning (8am – 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm – 5pm)" },
  { value: "evening", label: "Evening (5pm – 8pm)" },
  { value: "any", label: "Any time / flexible" },
];

const phoneDigits = company.phone.replace(/\D/g, "");
const todayISO = () => new Date().toISOString().slice(0, 10);

function buildMessage(form: QuoteForm): string {
  const lines: string[] = [];
  lines.push(`Hi M14service — I'd like a quote.`);
  lines.push("");
  if (form.name) lines.push(`Name: ${form.name}`);
  if (form.phone) lines.push(`Phone: ${form.phone}`);
  if (form.service) lines.push(`Service: ${form.service}`);
  if (form.size) lines.push(`Property: ${form.size}`);
  if (form.postcode) lines.push(`Postcode: ${form.postcode}`);
  if (form.date)
    lines.push(
      `Preferred date: ${form.date}${
        form.time ? ` (${form.time})` : ""
      }`
    );
  if (form.notes) {
    lines.push("");
    lines.push(`Notes: ${form.notes}`);
  }
  return lines.join("\n");
}

type QuoteForm = {
  name: string;
  phone: string;
  service: string;
  size: string;
  postcode: string;
  date: string;
  time: string;
  notes: string;
};

const EMPTY_FORM: QuoteForm = {
  name: "",
  phone: "",
  service: "",
  size: "",
  postcode: "",
  date: "",
  time: "",
  notes: "",
};

/* -------------------- Modal -------------------- */

function QuoteModal() {
  const { open, serviceSlug, closeQuote } = useQuote();
  const [form, setForm] = useState<QuoteForm>(EMPTY_FORM);

  // Pre-select service when modal is opened from a specific service card
  useEffect(() => {
    if (!open) return;
    if (serviceSlug) {
      const match = productCategories.find((p) => p.slug === serviceSlug);
      setForm((f) => ({ ...f, service: match?.title ?? "" }));
    } else {
      setForm((f) => ({ ...f, service: f.service }));
    }
  }, [open, serviceSlug]);

  // Reset form on close
  useEffect(() => {
    if (!open) setForm(EMPTY_FORM);
  }, [open]);

  if (!open) return null;

  const message = buildMessage(form);
  const waHref = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${company.email}?subject=${encodeURIComponent(
    "Quote request"
  )}&body=${encodeURIComponent(message)}`;

  const update = (k: keyof QuoteForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-title"
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={closeQuote}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />

      <div className="relative z-10 max-h-[92dvh] w-full max-w-[560px] overflow-y-auto rounded-t-2xl border border-line bg-white shadow-2xl sm:rounded-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-white px-5 py-4 sm:px-6">
          <div>
            <div className="section-tag mb-0.5">Get a quote</div>
            <h3
              id="quote-title"
              className="text-[1.15rem] font-extrabold -tracking-[0.01em] text-ink sm:text-[1.25rem]"
            >
              Tell us about the job.
            </h3>
          </div>
          <button
            type="button"
            onClick={closeQuote}
            aria-label="Close"
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-mid transition-colors hover:bg-off hover:text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <form
          className="space-y-4 px-5 py-5 sm:px-6 sm:py-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Your name">
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Jane Smith"
                className={inputClasses}
              />
            </Field>
            <Field label="Phone (optional)">
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="07…"
                className={inputClasses}
              />
            </Field>
          </div>

          <Field label="Service">
            <select
              value={form.service}
              onChange={update("service")}
              className={inputClasses}
            >
              <option value="">Choose a service…</option>
              {productCategories.map((p) => (
                <option key={p.slug} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </Field>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Property size">
              <select
                value={form.size}
                onChange={update("size")}
                className={inputClasses}
              >
                <option value="">Select…</option>
                {PROPERTY_SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Postcode">
              <input
                type="text"
                value={form.postcode}
                onChange={update("postcode")}
                placeholder="M14 5RT"
                className={inputClasses}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Preferred date">
              <input
                type="date"
                min={todayISO()}
                value={form.date}
                onChange={update("date")}
                className={inputClasses}
              />
            </Field>
            <Field label="Preferred time">
              <select
                value={form.time}
                onChange={update("time")}
                className={inputClasses}
              >
                <option value="">Select…</option>
                {TIME_SLOTS.map((t) => (
                  <option key={t.value} value={t.label}>
                    {t.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Anything we should know?">
            <textarea
              value={form.notes}
              onChange={update("notes")}
              rows={3}
              placeholder="Pets, parking, access, particular stains…"
              className={`${inputClasses} resize-none`}
            />
          </Field>

          <div className="rounded-xl bg-off px-4 py-3 text-[0.78rem] leading-[1.55] text-mid">
            We&apos;ll reply with a quote and confirm availability for your
            preferred slot. We don&apos;t store anything — your message is sent
            straight to M14service via WhatsApp or email.
          </div>

          {/* Send buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => {
                // brief delay so the click goes through, then close
                setTimeout(closeQuote, 100);
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-[#25D366] px-6 py-3.5 text-[0.96rem] font-bold text-white transition-colors hover:bg-[#1FB855]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12.04 2.5a9.5 9.5 0 0 0-8.2 14.34L2.5 21.5l4.83-1.27A9.5 9.5 0 1 0 12.04 2.5Zm5.55 13.43c-.24.66-1.4 1.27-1.93 1.32-.51.05-1.16.07-1.87-.12a17 17 0 0 1-1.7-.63 13 13 0 0 1-5-4.41c-.37-.51-.97-1.39-.97-2.65s.66-1.88.9-2.13a.94.94 0 0 1 .68-.32h.49c.16 0 .37-.06.58.44l.8 1.94c.07.13.11.29.02.46-.45.9-.93.86-.7 1.25.95 1.6 1.9 2.16 3.32 2.86.24.12.38.1.52-.06l.6-.7c.16-.18.31-.16.52-.09l1.83.86c.21.1.35.15.4.23.05.09.05.51-.19 1.16Z" />
              </svg>
              Send via WhatsApp
            </a>
            <a
              href={mailHref}
              onClick={() => {
                setTimeout(closeQuote, 100);
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] border-2 border-brand bg-white px-6 py-3.5 text-[0.96rem] font-bold text-brand transition-colors hover:bg-brand-pale"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Send via email
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

/* -------------------- Field bits -------------------- */

const inputClasses =
  "w-full rounded-[10px] border border-line bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-soft focus:border-brand";

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-mid">
        {label}
      </span>
      {children}
    </label>
  );
}
