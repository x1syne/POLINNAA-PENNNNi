import type { PropsWithChildren } from "react";
import { MobileMenu } from "@/components/site/MobileMenu";
import { SidebarNav } from "@/components/site/SidebarNav";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <>
      <div className="noise-line" />
      <MobileMenu />
      <div className="shell-grid">
        <SidebarNav />
        <main className="page-main">{children}</main>
      </div>
    </>
  );
}
