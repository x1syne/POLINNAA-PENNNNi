import { BlogSection } from "@/components/sections/BlogSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EmployeesSection } from "@/components/sections/EmployeesSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SiteShell } from "@/components/site/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <GallerySection />
      <OfferSection />
      <BeforeAfterSection />
      <EmployeesSection />
      <TrustSection />
      <BlogSection />
      <ContactSection />
    </SiteShell>
  );
}
