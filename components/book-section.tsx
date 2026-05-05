import Image from "next/image";
import { galleryProjects } from "@/lib/content";
import { QuoteForm } from "./quote-modal";

export default function BookSection() {
  // Show 4 strongest project photos on the left
  const photos = galleryProjects.slice(0, 4);

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-off px-5 py-14 md:px-[60px] md:py-[88px]"
    >
      <div className="mx-auto mb-10 max-w-[1280px] md:mb-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="section-tag mb-3">Book your clean</div>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink">
              Pick a slot. We&apos;ll take it from there.
            </h2>
          </div>
          <p className="max-w-[420px] text-[1rem] leading-[1.7] text-mid md:text-right">
            Choose a date, drop us the basics, send via WhatsApp or email. We
            confirm availability fast.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left — recent work, 2x2 photo grid */}
        <div className="lg:col-span-7 lg:order-1">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {photos.map((p) => (
              <div
                key={p.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-line"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-[0.85rem] text-soft">
            Photos from a recent project.
          </p>
        </div>

        {/* Right — booking card */}
        <div className="lg:col-span-5 lg:order-2">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_20px_60px_-30px_rgba(8,9,26,0.25)] sm:p-6 lg:sticky lg:top-[120px]">
            <div className="mb-4">
              <div className="section-tag mb-1">Book a slot</div>
              <h3 className="text-[1.25rem] font-extrabold -tracking-[0.01em] text-ink sm:text-[1.4rem]">
                Pick a date that suits you.
              </h3>
            </div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
