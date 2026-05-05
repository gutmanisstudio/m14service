import {
  PhoneCall,
  FileText,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { company } from "@/lib/content";

const phoneTel = company.phone.replace(/\s/g, "");

type Cta = {
  Icon: LucideIcon;
  label: string;
  sub: string;
  href: string;
  primary?: boolean;
  soon?: boolean;
};

const ctas: Cta[] = [
  {
    Icon: PhoneCall,
    label: "Call us directly",
    sub: company.phone,
    href: `tel:${phoneTel}`,
    primary: true,
  },
  {
    Icon: FileText,
    label: "Email a job brief",
    sub: company.email,
    href: `mailto:${company.email}`,
  },
  {
    Icon: Wrench,
    label: "See what we clean",
    sub: "Carpets, floors, factories and more",
    href: "#services",
  },
];

export default function MultiCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink px-5 py-20 md:px-[60px] md:py-[80px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 20% 0%, rgba(46,49,145,0.4) 0%, transparent 60%), radial-gradient(ellipse 55% 50% at 85% 100%, rgba(109,110,112,0.25) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mb-10 text-center md:mb-12">
          <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-burgundy-glow">
            ★ Three ways to start
          </span>
          <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-white">
            Pick what works for you —
            <br />
            <span className="text-burgundy-glow">we&apos;ll handle the rest.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-5">
          {ctas.map((c) => (
            <a
              key={c.label}
              href={c.href}
              aria-disabled={c.soon || undefined}
              className={`group relative flex items-center gap-5 overflow-hidden rounded-2xl border p-7 transition md:flex-col md:items-start md:gap-4 md:p-8 ${
                c.primary
                  ? "border-brand/70 bg-brand hover:bg-brand-dark"
                  : c.soon
                  ? "border-white/10 bg-white/[0.04] hover:border-white/20"
                  : "border-white/10 bg-white/[0.04] hover:border-burgundy/60 hover:bg-white/[0.07]"
              }`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  c.primary
                    ? "bg-white/15 text-white"
                    : "bg-burgundy/15 text-burgundy-glow"
                }`}
              >
                <c.Icon className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <div className="flex-1 md:mt-1">
                <div className="text-[1.05rem] font-bold leading-[1.3] text-white">
                  {c.label}
                </div>
                <div
                  className={`mt-0.5 text-[0.86rem] ${
                    c.primary ? "text-white/80" : "text-white/55"
                  }`}
                >
                  {c.sub}
                </div>
              </div>
              <ArrowRight
                aria-hidden
                className={`hidden h-5 w-5 transition group-hover:translate-x-0.5 md:inline ${
                  c.primary ? "text-white" : "text-burgundy-glow"
                }`}
                strokeWidth={2.25}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
