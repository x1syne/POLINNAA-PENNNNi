import { ArrowRight, Info } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

const dogServices = [
  {
    name: "Комплекс со стрижкой",
    time: "~ 130 мин",
    text: "Мытье, сушка, когти, уши, глаза, гигиена и аккуратная форма по породе.",
  },
  {
    name: "Комплекс с экспресс-линькой",
    time: "~ 90 мин",
    text: "Вычес подшерстка, мытье, сушка и рекомендации по домашнему уходу.",
  },
  {
    name: "Подготовка к выставке",
    time: "~ 190 мин",
    text: "Детальная работа с силуэтом, шерстью и финишной укладкой.",
  },
  {
    name: "Мытье-сушка, включая гигиену",
    time: "~ 90 мин",
    text: "Базовый уход между полными комплексами: чистота, объем и комфорт.",
  },
  {
    name: "Папильотки",
    time: "~ 130 мин",
    text: "Защита длинной шерсти и поддержание аккуратной формы между визитами.",
  },
  {
    name: "Подстричь и выщипать уши",
    time: "~ 20 мин",
    text: "Локальная гигиена ушей с бережной фиксацией питомца.",
  },
];

export function DogServicesListSection() {
  return (
    <AnimatedSection className="pt-6" id="dog-services">
      <div className="rose-light-panel relative overflow-hidden rounded-card p-5 text-text shadow-strong md:p-8 2xl:p-10">
        <span className="blob-line -left-28 bottom-6 z-0 opacity-18" />
        <div className="relative z-10">
          <h2 className="section-title text-text">Все услуги</h2>
          <div className="mt-9 grid gap-4">
            {dogServices.map((service) => (
              <article
                className="grid gap-4 rounded-[24px] border border-accent/10 bg-white/68 px-5 py-5 shadow-soft transition hover:bg-white/86 md:grid-cols-[1fr_auto_auto] md:items-center md:px-7"
                key={service.name}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-black text-text md:text-2xl">{service.name}</h3>
                    <Info className="text-muted" size={22} weight="bold" />
                  </div>
                  <p className="mt-2 max-w-[760px] text-base font-bold leading-7 text-muted">{service.text}</p>
                </div>
                <div className="text-lg font-black text-muted md:text-xl">{service.time}</div>
                <a className="button-base button-primary min-h-12 px-5" href={site.telegram} target="_blank" rel="noreferrer">
                  Связаться с нами
                  <ArrowRight size={18} weight="bold" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
