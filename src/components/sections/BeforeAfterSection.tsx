"use client";

import Image from "next/image";
import { ArrowsLeftRight } from "@phosphor-icons/react";
import { useState } from "react";

export function BeforeAfterSection() {
  const [position, setPosition] = useState(52);

  return (
    <section className="section" id="works">
      <div className="mb-9">
        <div className="section-kicker">До и после</div>
        <h2 className="section-title">Результат видно без лишних слов</h2>
        <p className="section-copy">Ползунок можно двигать. Блок сделан отдельным компонентом, чтобы потом быстро добавлять новые пары работ.</p>
      </div>

      <div className="grid items-center gap-8 xl:grid-cols-[1fr_0.72fr]">
        <div className="relative overflow-hidden rounded-card bg-white shadow-strong">
          <div className="relative aspect-[4/5] min-h-[520px]">
            <Image className="image-fill" src="/media/gallery-spaniel-before.webp" alt="Спаниель до груминга" fill sizes="(min-width: 1280px) 56vw, 100vw" />
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
              <Image className="image-fill max-w-none" src="/media/gallery-spaniel-after.webp" alt="Спаниель после груминга" fill sizes="(min-width: 1280px) 56vw, 100vw" />
            </div>
            <div className="absolute inset-y-0 w-0.5 bg-black" style={{ left: `${position}%` }} />
            <div
              className="absolute top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-surface-strong text-white shadow-strong"
              style={{ left: `${position}%` }}
            >
              <ArrowsLeftRight size={27} weight="bold" />
            </div>
            <div className="absolute bottom-5 left-5 rounded-pill bg-white/86 px-4 py-2 text-sm font-black backdrop-blur">После</div>
            <div className="absolute bottom-5 right-5 rounded-pill bg-white/86 px-4 py-2 text-sm font-black backdrop-blur">До</div>
          </div>
          <input
            className="absolute inset-x-8 bottom-8 h-8 cursor-ew-resize opacity-0"
            type="range"
            min="18"
            max="82"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Сравнить до и после"
          />
        </div>

        <div className="dark-card rounded-card p-7 md:p-9">
          <div className="text-sm font-black uppercase text-accent-soft">Как работаем</div>
          <h3 className="mt-4 text-4xl font-black leading-none md:text-5xl">Аккуратно, спокойно, без конвейера</h3>
          <p className="mt-6 text-lg font-bold leading-8 text-white/75">
            Мы не торопим питомца и не делаем процедуру через сильный страх. Если нужно, даем паузу, меняем темп и объясняем владельцу, как закрепить результат дома.
          </p>
        </div>
      </div>
    </section>
  );
}
