import Link from "next/link";
import { ArrowRight, MapPin, PawPrint } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/data/site";

export function SidebarNav() {
  return (
    <aside className="sticky top-8 hidden h-[calc(100dvh-64px)] flex-col rounded-nav border border-border bg-panel p-5 shadow-soft backdrop-blur-xl lg:flex">
      <Link className="mb-8 flex items-center gap-3 px-3 text-[2.55rem] font-black leading-none tracking-normal" href="#top">
        <span className="grid size-12 place-items-center rounded-full bg-accent text-white">
          <PawPrint size={27} weight="fill" />
        </span>
        <span>{site.shortBrand}</span>
      </Link>

      <nav className="grid gap-2" aria-label="Навигация по сайту">
        {site.nav.map((item) => (
          <Link
            className="group flex min-h-12 items-center justify-between rounded-2xl px-4 text-lg font-black text-muted transition hover:bg-black/6 hover:text-text"
            href={item.href}
            key={item.href}
          >
            <span>{item.label}</span>
            <ArrowRight className="opacity-0 transition group-hover:opacity-100" size={19} weight="bold" />
          </Link>
        ))}
      </nav>

      <div className="mt-auto grid gap-3">
        <a className="button-base button-muted w-full text-center" href={site.maps} target="_blank" rel="noreferrer">
          <MapPin size={20} weight="fill" />
          {site.address}
        </a>
        <a className="button-base button-muted w-full" href={site.telegram} target="_blank" rel="noreferrer">
          Telegram
        </a>
        <a className="button-base button-dark w-full" href="#contacts">
          Записаться
        </a>
      </div>
    </aside>
  );
}
