import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

export function TrustSection() {
  return (
    <AnimatedSection id="about">
      <div className="mb-9 text-center">
        <div className="section-kicker justify-center">Доверие</div>
        <h2 className="section-title mx-auto">Нас легко проверить</h2>
        <p className="section-copy mx-auto">Карточка на Яндекс Картах, открытый канал и реальные фото работ помогают человеку принять решение без лишних обещаний.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {site.stats.map((stat) => (
          <article className="glass-card rounded-card p-7 text-center" key={stat.label}>
            <h3 className="text-2xl font-black">{stat.label}</h3>
            <div className="mx-auto my-7 grid size-36 place-items-center rounded-full bg-[var(--palette-green-500)] text-4xl font-black text-white">
              {stat.value}
            </div>
            <p className="font-bold text-muted">{stat.detail}</p>
          </article>
        ))}
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
