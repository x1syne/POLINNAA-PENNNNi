import type { Metadata } from "next";
import { Images } from "@phosphor-icons/react/dist/ssr";
import { MediaSection } from "@/components/sections/MediaSection";
import { PageIntro } from "@/components/pages/PageIntro";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Фото и видео - Grooming Salon",
};

export default function MediaPage() {
  return (
    <SiteShell>
      <PageIntro
        icon={Images}
        kicker="Медиа"
        title="Фото и видео салона"
        text="Отдельный раздел для работ, команды, сертификатов и коротких видео. Сюда можно постепенно добавлять новые материалы из Telegram."
      />
      <MediaSection />
    </SiteShell>
  );
}
