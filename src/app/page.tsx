import { contact, services } from "@/lib/contact";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[448px] px-5 pt-16 pb-20 md:max-w-5xl md:px-8 md:pt-28 md:pb-32">
          <p className="text-xs uppercase tracking-[0.2em] text-mute">
            Cleaning services
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {/* TODO: confirm headline copy with client */}
            Clean carpets, polished floors,
            <br className="hidden md:block" /> spotless spaces.
          </h1>
          <p className="mt-5 max-w-[36ch] text-base text-mute md:text-lg">
            {/* TODO: confirm subhead with client */}
            Carpet, hard floor, upholstery and high level cleaning for homes,
            offices, factories and warehouses.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper hover:opacity-90"
            >
              Get a quote
            </a>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center rounded-full border border-line px-5 py-3 text-sm font-medium hover:border-ink"
            >
              Call {contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-line">
        <div className="mx-auto w-full max-w-[448px] px-5 py-16 md:max-w-5xl md:px-8 md:py-24">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Services
          </h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.slug}
                className="rounded-2xl border border-line p-5 hover:border-ink"
              >
                <div className="text-base font-medium">{s.title}</div>
                <p className="mt-1 text-sm text-mute">{s.blurb}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-mute">
            {/* TODO: confirm full service list, pricing model and coverage area */}
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto w-full max-w-[448px] px-5 py-16 md:max-w-5xl md:px-8 md:py-24">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Booking & contact
          </h2>
          <p className="mt-3 max-w-[40ch] text-base text-mute">
            {/* TODO: confirm contact intro and any service area / hours */}
            Tell us the space and the job — we&apos;ll come back with a quote.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href={contact.phoneHref}
              className="block rounded-2xl border border-line p-5 hover:border-ink"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-mute">
                Phone
              </div>
              <div className="mt-1 text-base font-medium">{contact.phone}</div>
            </a>
            <a
              href={contact.emailHref}
              className="block rounded-2xl border border-line p-5 hover:border-ink"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-mute">
                Email
              </div>
              <div className="mt-1 text-base font-medium">{contact.email}</div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
