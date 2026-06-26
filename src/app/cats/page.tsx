import type { Metadata } from "next";
import { Heart, ShieldCheck, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Груминг кошек - Grooming Salon",
};

export default function CatsPage() {
  const catFeatures = [
    {
      title: "Минимум лишней фиксации",
      text: "Оцениваем состояние кошки и не продолжаем процедуру, если стресс становится слишком сильным.",
      icon: ShieldCheck,
    },
    {
      title: "Аккуратный вычес",
      text: "Работаем с подшерстком, колтунами и чувствительной кожей без резких движений.",
      icon: Sparkle,
    },
    {
      title: "Понятные рекомендации",
      text: "После визита объясняем, как поддерживать шерсть и когда лучше прийти снова.",
      icon: Heart,
    },
  ];

  return (
    <SiteShell>
      <ServicesSection
        initialId="cat"
        title="Уход для кошек"
        serviceIds={[
          "cat",
          "maine-coon",
          "british-cat",
          "persian-cat",
          "scottish-fold",
          "sphynx-cat",
          "bengal-cat",
          "ragdoll-cat",
          "siberian-cat",
          "russian-blue-cat",
          "abyssinian-cat",
        ]}
      />
      <FeatureSection id="cats" title="Кошке должно быть спокойно" features={catFeatures} />
      <ContactSection />
    </SiteShell>
  );
}
