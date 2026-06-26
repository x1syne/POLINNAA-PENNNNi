import type { Metadata } from "next";
import { Dog, Heart, Scissors, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PageIntro } from "@/components/pages/PageIntro";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Груминг собак - Grooming Salon",
};

export default function DogsPage() {
  const dogFeatures = [
    {
      title: "Работаем по породе",
      text: "Подбираем силуэт, косметику и темп процедуры под шерсть, размер и привычки собаки.",
      icon: Scissors,
    },
    {
      title: "Без спешки",
      text: "Следим за реакцией собаки, делаем паузы и не превращаем визит в стресс.",
      icon: Heart,
    },
    {
      title: "Гигиена под контролем",
      text: "Когти, уши, глаза, лапы и интимная зона входят в понятный уходовый план.",
      icon: ShieldCheck,
    },
  ];

  return (
    <SiteShell>
      <PageIntro
        icon={Dog}
        kicker="Собаки"
        title="Стрижка, вычес и гигиена собак"
        text="От щенка на первом знакомстве до взрослого питомца с плотной шерстью. Подбираем процедуру по породе, состоянию шерсти и темпераменту."
      />
      <ServicesSection initialId="spitz" serviceIds={["spitz", "york"]} />
      <GallerySection />
      <FeatureSection title="Собаке должно быть спокойно" features={dogFeatures} />
      <ContactSection />
    </SiteShell>
  );
}
