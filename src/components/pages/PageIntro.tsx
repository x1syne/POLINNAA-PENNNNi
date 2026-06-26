import type { Icon } from "@phosphor-icons/react";
import { PawPrint } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

type PageIntroProps = {
  kicker: string;
  title: string;
  text: string;
  icon?: Icon;
};

export function PageIntro({ kicker, title, text, icon: Icon = PawPrint }: PageIntroProps) {
  return (
    <AnimatedSection className="section-tight">
      <div className="dark-card relative overflow-hidden rounded-card p-7 md:p-10 xl:p-12">
        <span className="blob-line -right-28 top-4 z-0 opacity-50" />
        <div className="relative z-10">
          <div className="section-kicker text-accent-soft">
            <Icon size={19} weight="fill" />
            {kicker}
          </div>
          <h1 className="section-title max-w-[980px] text-white">{title}</h1>
          <p className="section-copy max-w-[760px] text-white/72">{text}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
