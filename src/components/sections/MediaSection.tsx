import Image from "next/image";
import { PlayCircle } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

export function MediaSection() {
  return (
    <AnimatedSection id="media">
      <div className="mb-9">
        <div className="section-kicker">Галерея</div>
        <h2 className="section-title">Все материалы в одном месте</h2>
        <p className="section-copy">Фото показываются компактно, без растягивания исходников. Видео подключены отдельными легкими файлами.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        {site.media.photos.map((photo) => (
          <article className="glass-card overflow-hidden rounded-card p-3" key={photo.src}>
            <div className="relative aspect-square overflow-hidden rounded-panel bg-accent-soft">
              <Image className="image-fill transition duration-500 hover:scale-[1.04]" src={photo.src} alt={photo.alt} fill sizes="(min-width: 1536px) 230px, (min-width: 768px) 28vw, (min-width: 640px) 42vw, 100vw" />
            </div>
            <div className="px-2 py-4 font-black">{photo.label}</div>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-5 2xl:grid-cols-2">
        {site.media.videos.map((video) => (
          <article className="dark-card overflow-hidden rounded-card" key={video.src}>
            <div className="relative">
              <video className="aspect-video w-full object-cover" controls preload="metadata" poster={video.poster}>
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute left-5 top-5 grid size-14 place-items-center rounded-full bg-white text-accent shadow-soft">
                <PlayCircle size={30} weight="fill" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-black">{video.title}</h3>
              <p className="mt-3 font-bold leading-7 text-white/72">{video.text}</p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
