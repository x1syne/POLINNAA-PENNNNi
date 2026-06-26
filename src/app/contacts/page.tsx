import type { Metadata } from "next";
import { ChatCircleText } from "@phosphor-icons/react/dist/ssr";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageIntro } from "@/components/pages/PageIntro";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Контакты и запись - Grooming Salon",
};

export default function ContactsPage() {
  return (
    <SiteShell>
      <PageIntro
        icon={ChatCircleText}
        kicker="Контакты"
        title="Записаться или задать вопрос"
        text="Оставьте заявку на сайте, напишите в Telegram или откройте адрес салона на Яндекс Картах."
      />
      <ContactSection />
    </SiteShell>
  );
}
