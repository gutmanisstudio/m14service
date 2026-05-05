const STEPS = [
  {
    title: "Quote",
    body:
      "Tell us the space and the job — service, postcode, preferred slot. We come back fast with a price.",
  },
  {
    title: "Schedule",
    body:
      "Pick a date that suits you. We confirm availability and lock the slot.",
  },
  {
    title: "Arrival",
    body:
      "A fully equipped team turns up on time with everything we need — kit, products, the lot.",
  },
  {
    title: "Clean",
    body:
      "We work through the checklist for the service you booked. Stay if you like, or leave us with access.",
  },
  {
    title: "Done",
    body:
      "We finish the job, walk you through the result, and you're set. Easy to book again.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-off px-5 py-14 md:px-[60px] md:py-[88px]">
      <div className="mx-auto mb-10 max-w-[1200px] md:mb-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="section-tag mb-3">The process</div>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink">
              How a job runs.
            </h2>
          </div>
          <p className="max-w-[420px] text-[1rem] leading-[1.7] text-mid md:text-right">
            Five steps from your first message to a clean handover. No
            surprises.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px]">
        <ol className="relative grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
          {STEPS.map((s, i) => {
            const idx = String(i + 1).padStart(2, "0");
            return (
              <li
                key={s.title}
                className="relative flex flex-col bg-white p-6 sm:p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-[0.78rem] font-bold tracking-[0.05em] text-white shadow-[0_6px_16px_-6px_rgba(46,49,145,0.6)]">
                    {idx}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mb-2 text-[1.15rem] font-extrabold -tracking-[0.01em] text-ink">
                  {s.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.65] text-mid">
                  {s.body}
                </p>

                {/* Connector arrow on desktop, between cards */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-9 z-10 hidden h-6 w-6 items-center justify-center rounded-full bg-white text-brand shadow-[0_2px_8px_rgba(8,9,26,0.08)] md:flex"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
