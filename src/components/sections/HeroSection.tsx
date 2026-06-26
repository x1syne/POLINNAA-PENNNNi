import Link from "next/link";
import { ArrowRight, ChatCircleText, PawPrint } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <AnimatedSection className="section-tight" id="top">
      <span className="blob-line left-[36%] top-8 hidden lg:block" />
      <div className="grid min-h-[calc(100dvh-110px)] items-center gap-9 xl:grid-cols-[0.92fr_0.82fr]">
        <div>
          <div className="section-kicker">
            <PawPrint size={19} weight="fill" />
            {site.hero.eyebrow}
          </div>
          <h1 className="section-title max-w-[920px]">{site.hero.title}</h1>
          <p className="section-copy max-w-[700px]">{site.hero.text}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link className="button-base button-primary" href="/contacts">
              Записать питомца
              <ArrowRight size={22} weight="bold" />
            </Link>
            <a className="button-base button-muted" href={site.telegram} target="_blank" rel="noreferrer">
              <ChatCircleText size={22} weight="fill" />
              Написать в Telegram
            </a>
          </div>

          <div className="mt-10 grid max-w-[760px] gap-3 sm:grid-cols-3">
            {site.serviceKinds.map((item) => {
              const Icon = item.icon;
              return (
                <div className="rounded-panel bg-white/80 p-4 shadow-soft" key={item.label}>
                  <Icon className="mb-3 text-accent" size={27} weight="fill" />
                  <div className="font-black">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <HeroCarousel slides={site.hero.slides} />
      </div>
    </AnimatedSection>
  );
}
