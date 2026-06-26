import type { Metadata } from "next";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Работы до и после - Grooming Salon",
};

export default function WorksPage() {
  return (
    <SiteShell>
      <GallerySection />
      <BeforeAfterSection />
      <ContactSection />
    </SiteShell>
  );
}
