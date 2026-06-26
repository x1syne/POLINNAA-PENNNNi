"use client";

import Image from "next/image";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import type { ServiceGroup } from "@/data/site";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type ServicesSectionProps = {
  initialId?: string;
  serviceIds?: string[];
  title?: string;
};

type BreedSize = "all" | "small" | "medium" | "large" | "cats";

const breedSizeById: Record<string, BreedSize> = {
  spitz: "small",
  york: "small",
  poodle: "medium",
  maltipoo: "medium",
  "scotch-terrier": "medium",
  pug: "small",
  bulldog: "medium",
  chihuahua: "small",
  maltese: "small",
  griffon: "small",
  "shih-tzu": "medium",
  bichon: "medium",
  cavalier: "medium",
  westie: "medium",
  "french-bulldog": "medium",
  "cocker-spaniel": "medium",
  schnauzer: "medium",
  pekingese: "medium",
  "jack-russell": "medium",
  "chinese-crested": "medium",
  mittelschnauzer: "medium",
  shiba: "medium",
  dachshund: "medium",
  "golden-retriever": "large",
  "bernese-mountain-dog": "large",
  mixed: "large",
  samoyed: "large",
  "chow-chow": "large",
  sharpei: "large",
  corgi: "medium",
  spaniel: "medium",
  husky: "large",
  "german-shepherd": "large",
  labrador: "large",
  cat: "cats",
  "maine-coon": "cats",
  "british-cat": "cats",
  "persian-cat": "cats",
  "scottish-fold": "cats",
  "sphynx-cat": "cats",
  "bengal-cat": "cats",
  "ragdoll-cat": "cats",
  "siberian-cat": "cats",
  "russian-blue-cat": "cats",
  "abyssinian-cat": "cats",
};

const filterLabels: Record<BreedSize, string> = {
  all: "Все",
  small: "Мелкие",
  medium: "Средние",
  large: "Крупные",
  cats: "Кошки",
};

export function ServicesSection({ serviceIds, title = "Услуги на популярные породы" }: ServicesSectionProps) {
  const services = useMemo(
    () => (serviceIds ? site.services.filter((service) => serviceIds.includes(service.id)) : site.services),
    [serviceIds],
  );
  const [query, setQuery] = useState("");
  const availableFilters = useMemo(() => getAvailableFilters(services), [services]);
  const [activeFilter, setActiveFilter] = useState<BreedSize>(availableFilters[0] ?? "all");
  const filteredServices = services.filter((service) => {
    const size = breedSizeById[service.id] ?? "all";
    const matchesFilter = activeFilter === "all" || size === activeFilter;
    const matchesQuery = service.label.toLowerCase().includes(query.trim().toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <section className="section-tight pb-12 pt-5" id="services">
      <div className="rose-light-panel relative overflow-hidden rounded-card px-5 py-9 text-text shadow-strong md:px-8 md:py-12 2xl:px-12 2xl:py-14">
        <span className="blob-line -right-24 top-24 z-0 opacity-20" />
        <div className="relative z-10">
          <div className="mb-8">
            <h1 className="section-title text-text">{title}</h1>
          </div>

          <label className="relative block">
            <span className="sr-only">Найти породу</span>
            <input
              className="min-h-[72px] w-full rounded-[24px] border border-accent/15 bg-white/72 px-6 pr-20 text-xl font-black text-text placeholder:text-muted outline-none transition focus:border-accent/35 focus:bg-white"
              placeholder="Введите название породы"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <span className="absolute right-2 top-2 grid size-14 place-items-center rounded-[20px] bg-accent text-white shadow-soft">
              <MagnifyingGlass size={29} weight="bold" />
            </span>
          </label>

          <div className="mt-8 flex flex-col gap-4 xl:flex-row xl:items-center">
            <div className="text-xl font-black text-muted">Породы:</div>
            <div className="flex w-full gap-2 overflow-x-auto rounded-pill bg-white/60 p-1.5 shadow-soft xl:w-auto" role="tablist" aria-label="Фильтр пород">
              {availableFilters.map((filter) => (
                <button
                  className={cn(
                    "min-h-14 shrink-0 rounded-pill px-8 text-lg font-black transition",
                    activeFilter === filter ? "bg-accent text-white shadow-soft" : "text-muted hover:bg-white hover:text-text",
                  )}
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                >
                  {filterLabels[filter]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {filteredServices.map((service) => (
              <a
                className="group text-left transition hover:-translate-y-1"
                href={site.telegram}
                key={service.id}
                target="_blank"
                rel="noreferrer"
              >
                <span className="relative block aspect-square overflow-hidden rounded-[22px] bg-white shadow-soft ring-2 ring-transparent transition group-hover:ring-accent/35">
                  <Image className="image-fill" src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1536px) 180px, (min-width: 1024px) 18vw, 42vw" />
                </span>
                <span className="mt-3 block text-center text-lg font-black leading-tight text-text">{service.label}</span>
              </a>
            ))}
          </div>

          {filteredServices.length === 0 ? (
            <div className="mt-8 rounded-panel bg-white/70 p-5 text-lg font-black text-muted">
              Такой породы пока нет в списке. Напишите нам, и мы подскажем подходящий уход.
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function getAvailableFilters(services: ServiceGroup[]) {
  const sizes = new Set(services.map((service) => breedSizeById[service.id] ?? "all"));
  const ordered: BreedSize[] = ["small", "medium", "large", "cats"];
  const filters = ordered.filter((filter) => sizes.has(filter));
  return filters.length > 1 ? filters : filters.length === 1 ? filters : (["all"] as BreedSize[]);
}
