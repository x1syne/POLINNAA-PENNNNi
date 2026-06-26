import type { Metadata } from "next";
import { Images } from "@phosphor-icons/react/dist/ssr";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { PageIntro } from "@/components/pages/PageIntro";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Работы до и после - Grooming Salon",
};

export default function WorksPage() {
  return (
    <SiteShell>
      <PageIntro
        icon={Images}
        kicker="Работы"
        title="Фото реальных гостей"
        text="Галерея работ и интерактивный блок до/после. Здесь можно расширять портфолио без изменения структуры сайта."
      />
      <GallerySection />
      <BeforeAfterSection />
      <ContactSection />
    </SiteShell>
  );
}
