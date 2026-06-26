"use client";

import Link from "next/link";
import { useState } from "react";
import { ChatCircleText, List, MapPin, PawPrint, X } from "@phosphor-icons/react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-3 z-50 mx-auto mb-4 flex w-[calc(100%-28px)] items-center justify-between rounded-pill border border-border bg-white/88 px-3 py-2 shadow-soft backdrop-blur-xl lg:hidden">
        <Link className="flex items-center gap-2 text-xl font-black" href="#top">
          <span className="grid size-10 place-items-center rounded-full bg-accent text-white">
            <PawPrint size={22} weight="fill" />
          </span>
          {site.shortBrand}
        </Link>
        <button className="button-base button-muted min-h-11 px-4" type="button" onClick={() => setOpen(true)} aria-label="Открыть меню">
          <List size={22} weight="bold" />
        </button>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[70] bg-black/35 backdrop-blur-sm transition lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[80] flex w-[min(88vw,390px)] flex-col rounded-l-[34px] bg-white p-5 shadow-strong transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Мобильное меню"
      >
        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-black">
            <PawPrint className="text-accent" size={28} weight="fill" />
            {site.shortBrand}
          </div>
          <button className="button-base button-muted min-h-11 px-4" type="button" onClick={() => setOpen(false)} aria-label="Закрыть меню">
            <X size={22} weight="bold" />
          </button>
        </div>

        <nav className="grid gap-2">
          {site.nav.map((item) => (
            <Link
              className="flex min-h-14 items-center justify-between rounded-2xl bg-black/5 px-4 text-lg font-black"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
              <span aria-hidden>›</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto grid gap-3">
          <a className="button-base button-primary" href={site.telegram} target="_blank" rel="noreferrer">
            <ChatCircleText size={22} weight="fill" />
            Написать
          </a>
          <a className="button-base button-muted" href={site.maps} target="_blank" rel="noreferrer">
            <MapPin size={22} weight="fill" />
            Открыть карту
          </a>
        </div>
      </aside>
    </>
  );
}
