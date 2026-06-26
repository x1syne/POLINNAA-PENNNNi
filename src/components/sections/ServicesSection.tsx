"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CaretDown, PawPrint } from "@phosphor-icons/react";
import { useState } from "react";
import type { ServiceGroup } from "@/data/site";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type ServicesSectionProps = {
  initialId?: string;
  serviceIds?: string[];
};

export function ServicesSection({ initialId, serviceIds }: ServicesSectionProps) {
  const services = serviceIds ? site.services.filter((service) => serviceIds.includes(service.id)) : site.services;
  const [activeId, setActiveId] = useState(initialId ?? services[0]?.id ?? "");
  const active = services.find((service) => service.id === activeId) ?? services[0];

  return (
    <section className="section" id="services">
      <div className="mb-9">
        <div className="section-kicker">Прайс</div>
        <h2 className="section-title">Услуги на популярные породы</h2>
        <p className="section-copy">Цены вынесены в один файл данных. Когда появится полный прайс, его можно заменить без переделки интерфейса.</p>
      </div>

      <div className="flex gap-2 overflow-x-auto rounded-pill bg-white p-2 shadow-soft" role="tablist" aria-label="Выбор типа услуги">
        {services.map((service) => (
          <button
            className={cn(
              "min-h-14 shrink-0 rounded-pill px-7 text-lg font-black text-muted transition",
              active.id === service.id ? "bg-accent text-white shadow-soft" : "hover:bg-black/[0.06] hover:text-text",
            )}
            type="button"
            key={service.id}
            onClick={() => setActiveId(service.id)}
            role="tab"
            aria-selected={active.id === service.id}
          >
            {service.label}
          </button>
        ))}
      </div>

      {active ? <ServiceDetails active={active} /> : null}
    </section>
  );
}

function ServiceDetails({ active }: { active: ServiceGroup }) {
  return (
    <div className="mt-8 grid gap-8 2xl:grid-cols-[0.86fr_1fr]">
      <div>
        <div className="relative overflow-hidden rounded-card bg-accent-soft shadow-soft">
          <Image className="image-fill aspect-[4/5] max-h-[660px]" src={active.image} alt={active.imageAlt} width={900} height={1120} />
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_1.2fr]">
          <Link className="button-base button-muted" href="/works">
            Посмотреть работы
            <ArrowRight size={21} weight="bold" />
          </Link>
          <Link className="button-base button-primary" href="/contacts">
            Записать питомца
            <PawPrint size={22} weight="fill" />
          </Link>
        </div>
      </div>

      <div className="grid content-start gap-4">
        <div className="rounded-card bg-surface-strong p-6 text-white shadow-strong md:p-8">
          <p className="max-w-[680px] text-xl font-black leading-9">{active.note}</p>
        </div>
        {active.tiers.map((tier) => (
          <article className="glass-card overflow-hidden rounded-card" key={tier.title}>
            <div className="flex items-center justify-between gap-4 bg-black/[0.05] px-6 py-5 md:px-8">
              <h3 className="text-2xl font-black md:text-3xl">{tier.title}</h3>
              <CaretDown size={24} weight="bold" />
            </div>
            {tier.rows.map((row) => (
              <div className="grid gap-4 border-t border-border px-6 py-6 md:grid-cols-[1fr_auto] md:px-8" key={row.name}>
                <div>
                  <h4 className="text-xl font-black">{row.name}</h4>
                  <p className="mt-2 max-w-[680px] text-base font-bold leading-7 text-muted">{row.description}</p>
                </div>
                <div className="text-2xl font-black">{row.price}</div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}
