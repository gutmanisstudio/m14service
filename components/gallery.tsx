import Image from "next/image";
import { galleryProjects } from "@/lib/content";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-off px-5 py-20 md:px-[60px] md:py-[88px]"
    >
      <div className="mx-auto mb-10 max-w-[1200px] md:mb-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="section-tag mb-3">Recent project</div>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink">
              A look at the work.
            </h2>
          </div>
          <p className="max-w-[420px] text-[1rem] leading-[1.7] text-mid md:text-right">
            Photos straight from the job — same teams, same kit, same standard
            on every site.
          </p>
        </div>
      </div>

      {/* Mobile: horizontal scroll-snap. Desktop: 3-col grid with one feature row. */}
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-auto md:max-w-[1200px] md:grid md:grid-cols-6 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
        {galleryProjects.map((g, i) => {
          // Make first and fourth feature larger on desktop
          const featured = i === 0 || i === 3;
          return (
            <div
              key={g.src}
              className={`relative aspect-[4/3] w-[78vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-line md:w-auto ${
                featured ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 78vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
