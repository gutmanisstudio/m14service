import { Star } from "lucide-react";
import { reviews } from "@/lib/content";

function Card({
  stars,
  text,
  name,
  role,
}: {
  stars: number;
  text: string;
  name: string;
  role: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[0_8px_24px_-16px_rgba(8,9,26,0.15)] md:p-7">
      <div className="mb-3 flex gap-0.5 text-yellow-500">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mb-5 flex-1 text-[0.94rem] italic leading-[1.7] text-mid">
        “{text}”
      </p>
      <div className="border-t border-line pt-4">
        <div className="text-[0.88rem] font-semibold text-ink">{name}</div>
        <div className="text-[0.8rem] text-soft">{role}</div>
      </div>
    </article>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="border-y border-line bg-off-warm px-5 py-20 md:px-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center md:mb-12">
          <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy-dark">
            ★ Reviews
          </span>
          <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink">
            Real clients. Real spaces.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
