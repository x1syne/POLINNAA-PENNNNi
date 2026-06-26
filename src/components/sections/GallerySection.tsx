import Image from "next/image";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

export function GallerySection() {
  return (
    <AnimatedSection id="cats">
      <div className="mb-9 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
        <div>
          <div className="section-kicker">Работы</div>
          <h2 className="section-title">Реальные гости салона</h2>
        </div>
        <p className="section-copy m-0 xl:max-w-[520px]">Фото взяты из канала салона. Для продакшена их уже лучше хранить в WebP/AVIF, а не в PNG.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {site.gallery.map((item, index) => (
          <article className="group overflow-hidden rounded-card bg-white shadow-soft" key={item.src}>
            <div className="relative aspect-[4/5]">
              <Image
                className="image-fill transition duration-500 group-hover:scale-[1.04]"
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-black">{item.label}</span>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-black text-accent-strong">0{index + 1}</span>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
