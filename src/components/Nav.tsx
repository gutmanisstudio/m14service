import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[448px] items-center justify-between px-5 py-4 md:max-w-5xl md:px-8">
        <Link href="/" className="text-base font-semibold tracking-tight">
          M14<span className="text-accent">service</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-mute">
          <a href="#services" className="hover:text-ink">Services</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
        </nav>
      </div>
    </header>
  );
}
