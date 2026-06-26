import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

export function BlogSection() {
  const [featured, ...posts] = site.posts;

  return (
    <AnimatedSection id="blog">
      <div className="mb-9">
        <div className="section-kicker">Блог</div>
        <h2 className="section-title">Полезные заметки из канала</h2>
      </div>
      <div className="grid gap-5 xl:grid-cols-[0.9fr_1fr]">
        <article className="glass-card overflow-hidden rounded-card">
          <div className="relative aspect-[16/11]">
            <Image className="image-fill" src={featured.image} alt={featured.alt} fill sizes="(min-width: 1280px) 42vw, 100vw" />
          </div>
          <div className="p-6 md:p-8">
            <div className="text-sm font-black uppercase text-soft">{featured.date} · {featured.readTime}</div>
            <h3 className="mt-4 text-3xl font-black leading-tight md:text-5xl">{featured.title}</h3>
          </div>
        </article>

        <div className="grid gap-5">
          {posts.map((post) => (
            <article className="glass-card grid overflow-hidden rounded-card md:grid-cols-[220px_1fr]" key={post.title}>
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image className="image-fill" src={post.image} alt={post.alt} fill sizes="(min-width: 768px) 220px, 100vw" />
              </div>
              <div className="grid content-between p-6">
                <div>
                  <div className="text-sm font-black uppercase text-soft">{post.date} · {post.readTime}</div>
                  <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">{post.title}</h3>
                </div>
                <a className="mt-6 inline-flex items-center gap-2 font-black text-accent-strong" href={site.telegram} target="_blank" rel="noreferrer">
                  Читать в канале
                  <ArrowRight size={19} weight="bold" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
