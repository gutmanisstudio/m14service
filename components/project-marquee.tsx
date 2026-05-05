import { projects } from "@/lib/content";

function Card({ img, label, loc }: { img: string; label: string; loc: string }) {
  return (
    <div className="relative h-[132px] w-[200px] shrink-0 overflow-hidden rounded-xl ring-1 ring-white/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={label} className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-3 py-2.5">
        <div className="text-[0.84rem] font-bold text-white">{label}</div>
        <div className="text-[0.74rem] text-burgundy/80">{loc}</div>
      </div>
    </div>
  );
}

export default function ProjectMarquee() {
  const row1 = projects;
  const row2 = [...projects].reverse();

  return (
    <section className="overflow-hidden bg-ink pb-14 md:pb-16">
      <p className="mb-5 text-center text-[0.78rem] uppercase tracking-[0.2em] text-burgundy/45">
        ★ Mūsu objekti un pakalpojumi
      </p>

      <div className="marquee-pause mb-3 flex gap-4 overflow-hidden">
        <div className="animate-marquee flex shrink-0 gap-4">
          {row1.map((p, i) => (
            <Card key={`a-${i}`} {...p} />
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 gap-4">
          {row1.map((p, i) => (
            <Card key={`b-${i}`} {...p} />
          ))}
        </div>
      </div>

      <div className="marquee-pause flex gap-4 overflow-hidden">
        <div className="animate-marquee-rev flex shrink-0 gap-4">
          {row2.map((p, i) => (
            <Card key={`c-${i}`} {...p} />
          ))}
        </div>
        <div className="animate-marquee-rev flex shrink-0 gap-4">
          {row2.map((p, i) => (
            <Card key={`d-${i}`} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
