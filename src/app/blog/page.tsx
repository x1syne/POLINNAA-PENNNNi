import type { Metadata } from "next";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Блог и советы - Grooming Salon",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <BlogSection />
      <ContactSection />
    </SiteShell>
  );
}
