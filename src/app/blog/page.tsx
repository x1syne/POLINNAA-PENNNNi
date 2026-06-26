import type { Metadata } from "next";
import { Newspaper } from "@phosphor-icons/react/dist/ssr";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageIntro } from "@/components/pages/PageIntro";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Блог и советы - Grooming Salon",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <PageIntro
        icon={Newspaper}
        kicker="Блог"
        title="Советы по уходу"
        text="Материалы можно вести прямо из Telegram-канала, а на сайте показывать лучшие заметки и темы, которые помогают записаться осознанно."
      />
      <BlogSection />
      <ContactSection />
    </SiteShell>
  );
}
