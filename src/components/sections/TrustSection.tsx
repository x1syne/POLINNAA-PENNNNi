import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

export function TrustSection() {
  return (
    <AnimatedSection id="about">
      <div className="mb-9 text-center">
        <div className="section-kicker justify-center">Доверие</div>
        <h2 className="section-title mx-auto">Нас легко проверить</h2>
        <p className="section-copy mx-auto">Карточка на Яндекс Картах, понятные услуги и реальные фото работ помогают принять решение без лишних обещаний.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {site.stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article className="glass-card group overflow-hidden rounded-card p-6" key={stat.label}>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-black">{stat.label}</h3>
                  <p className="mt-2 font-bold text-muted">{stat.detail}</p>
                </div>
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent text-white shadow-soft transition group-hover:scale-105">
                  <Icon size={28} weight="fill" />
                </div>
              </div>
              <div className="mt-9 flex items-end justify-between border-t border-border pt-6">
                <div className="text-5xl font-black leading-none text-text">{stat.value}</div>
                <div className="rounded-pill bg-accent-soft px-4 py-2 text-sm font-black text-accent-strong">проверяемо</div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {site.quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <a className="button-base button-muted min-h-16" href={action.href} target="_blank" rel="noreferrer" key={action.label}>
              <Icon size={23} weight="fill" />
              {action.label}
              <ArrowRight size={18} weight="bold" />
            </a>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
