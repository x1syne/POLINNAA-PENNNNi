import Image from "next/image";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

export function GallerySection() {
  return (
    <AnimatedSection id="cats">
      <div className="mb-9 flex flex-col justify-between gap-6 2xl:flex-row 2xl:items-end">
        <div>
          <div className="section-kicker">Работы</div>
          <h2 className="section-title">Реальные гости салона</h2>
        </div>
        <p className="section-copy m-0 2xl:max-w-[520px]">Показываем работы салона: стрижки, вычес, гигиену и спокойный уход для разных питомцев.</p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-4 2xl:grid-cols-4">
        {site.gallery.map((item, index) => (
          <article className="group overflow-hidden rounded-[24px] bg-white shadow-soft md:rounded-card" key={item.src}>
            <div className="relative aspect-[4/5]">
              <Image
                className="image-fill transition duration-500 group-hover:scale-[1.04]"
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1536px) 22vw, (min-width: 768px) 45vw, 46vw"
              />
            </div>
            <div className="flex items-center justify-between gap-2 px-3 py-3 md:px-5 md:py-4">
              <span className="truncate text-sm font-black md:text-base">{item.label}</span>
              <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-black text-accent-strong md:px-3 md:text-sm">0{index + 1}</span>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
