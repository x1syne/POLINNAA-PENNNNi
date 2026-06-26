import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

export function TrustSection() {
  const [mapStat, ...facts] = site.stats;
  const MapIcon = mapStat.icon;

  return (
    <AnimatedSection id="about">
      <div className="mb-9 text-center">
        <div className="section-kicker justify-center">Доверие</div>
        <h2 className="section-title mx-auto">Нас легко проверить</h2>
        <p className="section-copy mx-auto">Карточка на Яндекс Картах, понятные услуги и реальные фото работ помогают принять решение без лишних обещаний.</p>
      </div>

      <div className="trust-proof-grid">
        <a className="trust-map-card glass-card group" href={site.maps} target="_blank" rel="noreferrer">
          <div className="trust-map-orb">
            <MapIcon size={31} weight="fill" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-black uppercase text-accent-strong">Яндекс Карты</p>
            <h3 className="mt-3 text-[clamp(2rem,8vw,4rem)] font-black leading-[0.95] text-text">{mapStat.value}</h3>
            <p className="mt-3 max-w-[24rem] text-base font-bold leading-7 text-muted">
              {site.city}, {site.address}. Карточка салона открывается отдельно, чтобы быстро построить маршрут.
            </p>
          </div>
          <div className="trust-map-action">
            Открыть карту
            <ArrowRight size={18} weight="bold" />
          </div>
        </a>

        <div className="grid gap-5">
          {facts.map((stat) => {
            const Icon = stat.icon;

            return (
              <article className="trust-fact-card glass-card group" key={stat.label}>
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="trust-fact-title text-[1.65rem] font-black leading-tight">{stat.label}</h3>
                    <p className="mt-2 font-bold leading-7 text-muted">{stat.detail}</p>
                  </div>
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent text-white shadow-soft transition group-hover:scale-105">
                    <Icon size={28} weight="fill" />
                  </div>
                </div>
                <div className="mt-7 flex items-end justify-between border-t border-border pt-5">
                  <div className="trust-fact-value text-5xl font-black leading-none text-text">{stat.value}</div>
                  <div className="trust-status rounded-pill bg-accent-soft px-4 py-2 text-sm font-black text-accent-strong">проверяемо</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="trust-actions mt-5 grid gap-5 md:grid-cols-3">
        {site.quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <a className="button-base button-muted min-h-16 min-w-0" href={action.href} target="_blank" rel="noreferrer" key={action.label}>
              <Icon size={23} weight="fill" />
              <span className="truncate">{action.label}</span>
              <ArrowRight size={18} weight="bold" />
            </a>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
