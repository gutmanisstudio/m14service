export default function AboutIntro() {
  return (
    <section className="bg-white px-5 py-20 md:px-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[820px]">
        <div className="section-tag mb-4">What we&apos;re about</div>

        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.08] -tracking-[0.02em] text-ink">
          Spotless. Fresh.{" "}
          <span className="text-brand">Like new.</span>
        </h2>

        <p className="mt-5 text-[1.1rem] font-medium leading-[1.6] text-ink">
          This is what we do at M14service — turning mess into magic.
        </p>

        <div className="mt-10 space-y-5 text-[1.02rem] leading-[1.8] text-mid">
          <p>
            Because a clean space isn&apos;t just about appearance — it&apos;s
            about comfort, health, and peace of mind.
          </p>
          <p>
            If you&apos;re looking for trusted cleaning services in
            Manchester, your search ends here. Homes, apartments, offices,
            hotels — we do it all.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-8 text-[0.85rem] text-soft">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Manchester &amp; surrounding areas
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Fully equipped teams
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Free quotes, fast replies
          </span>
        </div>
      </div>
    </section>
  );
}
