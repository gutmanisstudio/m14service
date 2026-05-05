import { company } from "@/lib/content";

// TODO: replace with the real M14service service-area or office once confirmed.
const mapQuery = encodeURIComponent("United Kingdom");
const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=5&ie=UTF8&iwloc=&output=embed`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-off-warm px-5 py-20 md:px-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
      <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy-dark">
        ★ Contact
      </span>
      <h2 className="mb-10 text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink sm:mb-12">
        Send us the job —{" "}
        <span className="text-brand">we&apos;ll quote it.</span>
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.3fr]">
        {/* Info card */}
        <div className="rounded-2xl border border-line bg-white px-7 py-9 md:px-9 md:py-10">
          <div className="mb-6 text-[0.76rem] font-bold uppercase tracking-[0.2em] text-burgundy-dark">
            ★ How to reach us
          </div>

          <div className="space-y-6 text-[0.98rem] text-mid">
            <div>
              <div className="mb-1 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-soft">
                Service area
              </div>
              <div className="text-[1.02rem] font-medium text-ink">
                {company.address}
              </div>
            </div>

            <div>
              <div className="mb-1 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-soft">
                Phone
              </div>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="text-[1.02rem] font-medium text-ink transition-colors hover:text-brand"
              >
                {company.phone}
              </a>
            </div>

            <div>
              <div className="mb-1 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-soft">
                Email
              </div>
              <a
                href={`mailto:${company.email}`}
                className="text-[1.02rem] font-medium text-ink transition-colors hover:text-brand"
              >
                {company.email}
              </a>
            </div>

            <div>
              <div className="mb-1 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-soft">
                Hours
              </div>
              <div className="text-[1.02rem] font-medium text-ink">{company.hours}</div>
            </div>

            <div>
              <div className="mb-1 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-soft">
                Social
              </div>
              <div className="flex flex-col gap-1 text-[1.02rem] font-medium text-ink">
                <a
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand"
                >
                  Instagram · @{company.instagram}
                </a>
                <a
                  href={company.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand"
                >
                  YouTube · {company.youtube}
                </a>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${company.email}`}
            className="mt-7 inline-block w-full rounded-[10px] bg-burgundy px-6 py-3.5 text-center text-[0.92rem] font-bold text-white transition-colors hover:bg-burgundy-dark"
          >
            Email us →
          </a>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          <iframe
            src={mapSrc}
            title="M14service service area"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full md:h-full md:min-h-[440px]"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
      </div>
    </section>
  );
}
