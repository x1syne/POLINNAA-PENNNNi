import type { Metadata } from "next";
import { Scissors } from "@phosphor-icons/react/dist/ssr";
import { ContactSection } from "@/components/sections/ContactSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PageIntro } from "@/components/pages/PageIntro";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Услуги и цены - Grooming Salon",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageIntro
        icon={Scissors}
        kicker="Услуги"
        title="Прайс и комплексы ухода"
        text="Основные услуги собраны в интерактивном прайсе. Полный расчет зависит от породы, размера, состояния шерсти и поведения питомца."
      />
      <ServicesSection />
      <OfferSection />
      <ContactSection />
    </SiteShell>
  );
}
