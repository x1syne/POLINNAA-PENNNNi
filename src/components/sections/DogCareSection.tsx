import { PawPrint } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export function DogCareSection() {
  return (
    <AnimatedSection id="dog-care">
      <div className="grid gap-7 2xl:grid-cols-[0.9fr_1fr]">
        <div>
          <h2 className="section-title">Подробнее о стрижке собак</h2>
          <div className="mt-8 grid gap-6 text-xl font-bold leading-9 text-muted">
            <p>
              Груминг помогает собаке чувствовать себя легче дома и на прогулке. Мы смотрим на породу,
              состояние шерсти, возраст и реакцию питомца, а затем подбираем спокойный темп процедуры.
            </p>
            <p>
              Для длинношерстных пород важны вычес, аккуратная сушка и профилактика колтунов. Для гладкошерстных
              питомцев чаще нужен уход за когтями, ушами, кожей и сезонной линькой.
            </p>
          </div>
          <div className="dark-card mt-8 rounded-card p-6 md:p-8">
            <div className="mb-4 inline-grid size-14 place-items-center rounded-2xl bg-accent text-white">
              <PawPrint size={27} weight="fill" />
            </div>
            <h3 className="text-3xl font-black leading-tight">Груминг без лишнего стресса</h3>
            <p className="mt-4 text-lg font-bold leading-8 text-white/72">
              Если питомец волнуется, мастер делает паузу, меняет фиксацию и продолжает мягче. Такой подход
              помогает собаке привыкнуть к столу, фену, воде и рукам мастера.
            </p>
          </div>
        </div>

        <article className="dark-card rounded-card p-6 md:p-8 2xl:p-10">
          <h3 className="text-3xl font-black leading-tight md:text-4xl">Когти, уши и шерсть под контролем</h3>
          <div className="mt-6 grid gap-5 text-lg font-bold leading-8 text-white/76">
            <p>
              Длинные когти меняют постановку лапы и могут мешать ходить. Мы подстригаем их постепенно,
              не срезаем лишнее и следим за реакцией собаки.
            </p>
            <p>
              В ушах и на лапах быстро собирается грязь, а плотная шерсть без вычеса может сбиваться в колтуны.
              Регулярный уход снижает риск раздражения кожи и делает дом чище.
            </p>
            <p>
              После процедуры объясняем, как поддерживать результат дома: как часто расчесывать, когда приходить
              на гигиену и какие зоны лучше не трогать самостоятельно.
            </p>
          </div>
        </article>
      </div>
    </AnimatedSection>
  );
}
