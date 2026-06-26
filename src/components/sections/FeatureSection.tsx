import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site, type Feature } from "@/data/site";

type FeatureSectionProps = {
  id?: string;
  kicker?: string;
  title?: string;
  features?: Feature[];
};

export function FeatureSection({
  id = "dogs",
  kicker = "Подход",
  title = "Забота, которую питомец выдерживает спокойно",
  features = site.features,
}: FeatureSectionProps) {
  return (
    <AnimatedSection id={id}>
      <div className="mb-10">
        <div className="section-kicker">{kicker}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {features.map((feature) => {
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
