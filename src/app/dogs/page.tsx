import type { Metadata } from "next";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DogCareSection } from "@/components/sections/DogCareSection";
import { DogServicesListSection } from "@/components/sections/DogServicesListSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Груминг собак - Grooming Salon",
};

export default function DogsPage() {
  return (
    <SiteShell>
      <ServicesSection
        initialId="spitz"
        title="Стрижка собак"
        serviceIds={[
          "spitz",
          "york",
          "chihuahua",
          "maltese",
          "griffon",
          "poodle",
          "maltipoo",
          "shih-tzu",
          "bichon",
          "cavalier",
          "westie",
          "french-bulldog",
          "cocker-spaniel",
          "schnauzer",
          "pekingese",
          "jack-russell",
          "chinese-crested",
          "mittelschnauzer",
          "shiba",
          "dachshund",
          "husky",
          "golden-retriever",
          "german-shepherd",
          "bernese-mountain-dog",
          "mixed",
          "samoyed",
          "chow-chow",
          "labrador",
          "spaniel",
          "scotch-terrier",
          "pug",
          "bulldog",
          "sharpei",
          "corgi",
        ]}
      />
      <DogServicesListSection />
      <ContactSection />
      <DogCareSection />
      <BlogSection />
    </SiteShell>
  );
}
