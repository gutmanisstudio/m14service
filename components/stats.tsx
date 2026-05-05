import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-[2px] bg-line md:grid-cols-4">
      {stats.map((s, i) => {
        const isBurgundy = i === 1 || i === 3;
        return (
          <div
            key={s.l}
            className={`${isBurgundy ? "bg-burgundy text-white" : "bg-brand text-white"} px-6 py-7 text-center md:py-8`}
          >
            <div
              className={`mb-1 text-[1.9rem] font-black leading-none md:text-[2.1rem]`}
            >
              {s.n}
            </div>
            <div
              className={`text-[0.78rem] font-semibold uppercase tracking-[0.08em] md:text-[0.8rem] ${
                isBurgundy ? "text-white/70" : "text-white/65"
              }`}
            >
              {s.l}
            </div>
          </div>
        );
      })}
    </div>
  );
}
