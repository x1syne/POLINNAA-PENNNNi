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

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 2xl:grid-cols-4">
        {site.media.photos.map((photo) => (
          <article className="glass-card overflow-hidden rounded-[24px] p-2 md:rounded-card md:p-3" key={photo.src}>
            <div className="relative aspect-square overflow-hidden rounded-[18px] bg-accent-soft md:rounded-panel">
              <Image className="image-fill transition duration-500 hover:scale-[1.04]" src={photo.src} alt={photo.alt} fill sizes="(min-width: 1536px) 230px, (min-width: 768px) 28vw, 46vw" />
            </div>
            <div className="truncate px-2 py-3 text-sm font-black md:py-4 md:text-base">{photo.label}</div>
          </article>
        ))}
      </div>

      <div className="mb-6 mt-12">
        <div className="section-kicker">Видео</div>
        <h3 className="max-w-4xl text-4xl font-black leading-none tracking-tight text-text md:text-6xl">
          Короткие видео из салона
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {site.media.videos.map((video) => (
          <article className="glass-card overflow-hidden rounded-[28px]" key={video.src}>
            <div className="relative">
              <video className="aspect-video w-full object-cover" controls preload="metadata" poster={video.poster}>
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute left-4 top-4 grid size-12 place-items-center rounded-full bg-white/90 text-accent shadow-soft backdrop-blur md:size-14">
                <PlayCircle size={28} weight="fill" />
              </div>
            </div>
            <div className="p-5 md:p-6">
              <h4 className="text-2xl font-black text-text">{video.title}</h4>
              <p className="mt-2 font-bold leading-7 text-muted">{video.text}</p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
