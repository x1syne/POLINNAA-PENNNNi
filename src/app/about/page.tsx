import type { Metadata } from "next";
import { Certificate } from "@phosphor-icons/react/dist/ssr";
import { EmployeesSection } from "@/components/sections/EmployeesSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { PageIntro } from "@/components/pages/PageIntro";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "О салоне и мастерах - Grooming Salon",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        icon={Certificate}
        kicker="О нас"
        title="Команда груминг-салона"
        text="Новый груминг-салон в Павловском Посаде с профессиональным обучением, живым каналом и внимательным подходом к каждому питомцу."
      />
      <EmployeesSection />
      <FeatureSection />
      <TrustSection />
    </SiteShell>
  );
}
