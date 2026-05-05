import {
  Sparkles,
  Building2,
  Droplets,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type Card = {
  Icon: LucideIcon;
  problem: string;
  detail: string;
  solution: string;
  fix: string;
  cta: string;
  href: string;
};

const cards: Card[] = [
  {
    Icon: Sparkles,
    problem: "Tired carpets and dingy upholstery",
    detail:
      "Years of foot traffic, spills and dust grind into carpet fibres and sofa fabrics. Vacuuming alone can't reach the ground-in dirt — and once colour goes flat, the whole room reads tired.",
    solution: "How we fix it",
    fix:
      "Hot-water extraction lifts dirt that vacuuming leaves behind. We test fabrics, treat stains, and dry the surface so you can use the room the same day. Carpets and sofas come back looking close to new.",
    cta: "Get a carpet quote",
    href: "#contact",
  },
  {
    Icon: Building2,
    problem: "Hard floors that have lost their finish",
    detail:
      "Stone, vinyl and wooden floors dull as the protective finish wears off. Once the seal is gone, dirt sets into the surface, and a regular mop only spreads it around. Public-facing spaces start to look neglected.",
    solution: "How we fix it",
    fix:
      "We strip back old residue, deep clean and re-seal — restoring grip, gloss and a wipeable surface. Suitable for offices, retail, hospitality and high-traffic residential floors.",
    cta: "Get a floor quote",
    href: "#contact",
  },
  {
    Icon: Droplets,
    problem: "Industrial spaces nobody else will touch",
    detail:
      "Factory floors, warehouses, post-build sites and high-level surfaces (beams, vents, ceilings) get skipped because they need real kit and access training. Dust and grease build up — and so does compliance risk.",
    solution: "How we fix it",
    fix:
      "We're equipped for industrial-scale cleans, post-renovation handovers and high-level work. Tell us the site and we'll come back with a plan, a price and a schedule.",
    cta: "Plan an industrial clean",
    href: "#contact",
  },
];

export default function ProblemSolution() {
  return (
    <section id="solutions" className="bg-off-warm px-5 py-20 md:px-[60px] md:py-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy-dark">
          ★ Three problems, three fixes
        </span>
        <h2 className="mb-12 max-w-[820px] text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink sm:mb-14">
          We fix the things
          <br />
          <span className="text-brand">that make a space look tired.</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-5">
          {cards.map((c) => (
            <article
              key={c.problem}
              className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition hover:border-burgundy/40 hover:shadow-[0_20px_40px_-20px_rgba(46,49,145,0.25)] md:p-7"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/15">
                <c.Icon className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <h3 className="mb-2.5 text-[1.1rem] font-bold leading-[1.3] -tracking-[0.01em] text-ink md:text-[1.18rem]">
                {c.problem}
              </h3>
              <p className="mb-5 text-[0.9rem] leading-[1.7] text-mid">
                {c.detail}
              </p>

              <div className="mb-2 mt-auto flex items-center gap-1.5 border-t border-line pt-5">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand" strokeWidth={2.5} />
                <span className="text-[0.74rem] font-bold uppercase tracking-[0.15em] text-brand">
                  {c.solution}
                </span>
              </div>
              <p className="mb-5 text-[0.9rem] leading-[1.7] text-ink">
                {c.fix}
              </p>

              <a
                href={c.href}
                className="inline-flex items-center gap-1.5 text-[0.88rem] font-bold text-brand transition hover:text-brand-dark"
              >
                {c.cta}
                <ArrowRight
                  className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
