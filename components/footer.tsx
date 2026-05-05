import { company, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pt-14 pb-8 md:px-[60px] md:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white/[0.06] pb-10 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.jpg" alt="M14service" className="mb-5 h-12 w-12 rounded-md md:h-14 md:w-14" />
            <p className="max-w-[320px] text-[0.88rem] leading-[1.75] text-white/50">
              Carpet, hard floor, upholstery and high-level cleaning for homes,
              offices, factories and warehouses across the UK.
            </p>
          </div>

          <div>
            <div className="mb-4 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-white/35">
              Navigation
            </div>
            <ul className="flex flex-col gap-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.9rem] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-white/35">
              Contact
            </div>
            <ul className="flex flex-col gap-2.5 text-[0.9rem] text-white/70">
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>{company.hours}</li>
              <li className="text-white/50">{company.address}</li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-white/35">
              Follow
            </div>
            <ul className="flex flex-col gap-2.5 text-[0.86rem] text-white/60">
              <li>
                <a
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram · @{company.instagram}
                </a>
              </li>
              <li>
                <a
                  href={company.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  YouTube · {company.youtube}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-[0.74rem] uppercase tracking-[0.1em] text-white/20">
          © {new Date().getFullYear()} M14service. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
