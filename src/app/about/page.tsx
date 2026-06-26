import type { Metadata } from "next";
import { EmployeesSection } from "@/components/sections/EmployeesSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "О салоне и мастерах - Grooming Salon",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <EmployeesSection />
      <FeatureSection />
      <TrustSection />
    </SiteShell>
  );
}
