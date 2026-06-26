import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

export function FeatureSection() {
  return (
    <AnimatedSection id="dogs">
      <div className="mb-10">
        <div className="section-kicker">Подход</div>
        <h2 className="section-title">Забота, которую питомец выдерживает спокойно</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {site.features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article className="glass-card rounded-card p-6 md:p-8" key={feature.title}>
              <div className="mb-8 grid size-16 place-items-center rounded-full bg-accent text-white">
                <Icon size={30} weight="fill" />
              </div>
              <h3 className="text-2xl font-black leading-tight">{feature.title}</h3>
              <p className="mt-4 text-lg font-bold leading-8 text-muted">{feature.text}</p>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
