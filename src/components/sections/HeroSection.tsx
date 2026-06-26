import Link from "next/link";
import { ArrowRight, PawPrint } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { HeroStories } from "@/components/sections/HeroStories";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <AnimatedSection className="section-tight" id="top">
      <span className="blob-line left-[36%] top-8 hidden lg:block" />
      <div className="grid items-start gap-7 lg:min-h-[calc(100dvh-110px)] lg:items-center xl:grid-cols-[0.92fr_0.82fr]">
        <div>
          <div className="mb-4 lg:hidden">
            <HeroStories slides={site.hero.slides} />
          </div>

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
            <Link className="button-base button-muted" href="/services">
              Посмотреть услуги
            </Link>
          </div>

          <div className="mt-8 flex max-w-full gap-3 overflow-x-auto pb-2 sm:grid sm:max-w-[760px] sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:mt-10">
            {site.serviceKinds.map((item) => {
              const Icon = item.icon;
              return (
                <div className="flex min-w-[142px] shrink-0 items-center gap-3 rounded-2xl bg-white/82 px-4 py-3 shadow-soft sm:block sm:min-w-0 sm:rounded-panel sm:p-4" key={item.label}>
                  <Icon className="text-accent sm:mb-3" size={27} weight="fill" />
                  <div className="font-black">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block">
          <HeroCarousel slides={site.hero.slides} />
        </div>
      </div>
    </AnimatedSection>
  );
}
