"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChatCircleText, List, MapPin, PawPrint, X } from "@phosphor-icons/react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const scrollY = window.scrollY;
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <>
      <header className="liquid-glass-menu fixed left-1/2 top-3 z-50 flex w-[calc(100%-28px)] -translate-x-1/2 items-center justify-between rounded-pill px-3 py-2 lg:hidden">
        <Link className="flex min-w-0 items-center gap-2" href="/">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-white">
            <PawPrint size={22} weight="fill" />
          </span>
          <span className="shrink-0 text-xl font-black leading-none">{site.shortBrand}</span>
          <span className="min-w-0 border-l border-black/10 pl-2 leading-tight">
            <span className="block truncate text-[0.68rem] font-black text-accent-strong">{site.city}</span>
            <span className="block max-w-[126px] truncate text-[0.66rem] font-black text-muted">{site.address}</span>
          </span>
        </Link>
        <button className="liquid-glass-button button-base min-h-11 px-4 text-text" type="button" onClick={() => setOpen(true)} aria-label="Открыть меню">
          <List size={22} weight="bold" />
        </button>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[70] bg-black/28 backdrop-blur-md transition lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />

      {open ? (
        <aside
          className="liquid-glass-drawer fixed right-3 top-3 z-[80] flex h-[calc(100dvh-24px)] w-[min(86vw,360px)] flex-col rounded-[34px] p-4 lg:hidden"
          aria-label="Мобильное меню"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[1.7rem] font-black">
              <PawPrint className="text-accent" size={26} weight="fill" />
              {site.shortBrand}
            </div>
            <button className="liquid-glass-button button-base min-h-10 px-4 text-text" type="button" onClick={() => setOpen(false)} aria-label="Закрыть меню">
              <X size={21} weight="bold" />
            </button>
          </div>

          <nav className="grid gap-1.5">
            {site.nav.map((item) => (
              <Link
                className="liquid-glass-link flex min-h-11 items-center justify-between rounded-2xl px-4 text-base font-black"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <span aria-hidden>›</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto grid gap-2 pt-3">
            <a className="button-base button-primary min-h-12" href={site.telegram} target="_blank" rel="noreferrer">
              <ChatCircleText size={20} weight="fill" />
              Написать
            </a>
            <a className="liquid-glass-button button-base min-h-12 text-text" href={site.maps} target="_blank" rel="noreferrer">
              <MapPin size={20} weight="fill" />
              Открыть карту
            </a>
          </div>
        </aside>
      ) : null}
    </>
  );
}
