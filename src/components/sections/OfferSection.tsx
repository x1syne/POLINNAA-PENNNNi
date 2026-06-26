import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, PawPrint } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export function OfferSection() {
  return (
    <AnimatedSection id="offers">
      <div className="mb-9">
        <div className="section-kicker">
          <Gift size={19} weight="fill" />
          Предложения
        </div>
        <h2 className="section-title">Акции можно включать и выключать из данных</h2>
        <p className="section-copy">Пока используем мягкие вечнозеленые предложения. Исторические акции из Telegram лучше не показывать активными без подтверждения.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <article className="dark-card rounded-card p-6 md:p-8">
          <div className="relative mb-7 overflow-hidden rounded-panel bg-white/10">
            <Image className="image-fill aspect-[16/10]" src="/media/promo-loyalty.webp" alt="Акция и забота о питомцах" width={1000} height={720} />
          </div>
          <h3 className="text-4xl font-black leading-tight md:text-5xl">Первый визит без тревоги</h3>
          <p className="mt-4 text-lg font-bold leading-8 text-white/72">Знакомим питомца со столом, феном и руками мастера в комфортном темпе. Подходит щенкам, котятам и осторожным взрослым животным.</p>
          <Link className="button-base button-primary mt-7" href="#contacts">
            Обсудить визит
            <ArrowRight size={22} weight="bold" />
          </Link>
        </article>

        <article className="glass-card rounded-card p-6 md:p-8">
          <div className="grid min-h-full content-between">
            <div>
              <div className="mb-8 grid size-20 place-items-center rounded-full bg-accent text-white">
                <PawPrint size={38} weight="fill" />
              </div>
              <h3 className="text-4xl font-black leading-tight md:text-5xl">Поддерживающий уход между стрижками</h3>
              <p className="mt-4 text-lg font-bold leading-8 text-muted">Помогаем не доводить шерсть до колтунов: вычес, когти, уши, глаза и рекомендации по домашнему уходу.</p>
            </div>
            <Link className="button-base button-dark mt-7" href="#services">
              Смотреть услуги
              <ArrowRight size={22} weight="bold" />
            </Link>
          </div>
        </article>
      </div>
    </AnimatedSection>
  );
}
