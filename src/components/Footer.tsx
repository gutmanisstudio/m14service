import { contact } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[448px] px-5 py-10 md:max-w-5xl md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-base font-semibold tracking-tight">
              M14<span className="text-accent">service</span>
            </div>
            <p className="mt-1 text-sm text-mute">Cleaning services</p>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <a href={contact.phoneHref} className="hover:text-accent">
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="hover:text-accent">
              {contact.email}
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-mute hover:text-ink"
            >
              Instagram · @{contact.instagram}
            </a>
            <a
              href={contact.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-mute hover:text-ink"
            >
              YouTube · {contact.youtube}
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-mute">
          &copy; {new Date().getFullYear()} M14service
        </div>
      </div>
    </footer>
  );
}
