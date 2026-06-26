import type { Metadata } from "next";
import { MediaSection } from "@/components/sections/MediaSection";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Фото и видео - Grooming Salon",
};

export default function MediaPage() {
  return (
    <SiteShell>
      <MediaSection />
    </SiteShell>
  );
}
