import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

export function BlogSection() {
  const [featured, ...posts] = site.posts;

  return (
    <AnimatedSection id="blog">
      <div className="mb-9">
        <div className="section-kicker">Блог</div>
        <h2 className="section-title">Полезные заметки по уходу</h2>
      </div>
      <div className="grid gap-5 2xl:grid-cols-[0.9fr_1fr]">
        <article className="glass-card overflow-hidden rounded-card">
          <Link className="block" href={`/blog/${featured.slug}`}>
            <div className="relative mx-auto mt-6 aspect-[4/3] w-[min(100%-48px,420px)] overflow-hidden rounded-panel bg-accent-soft">
              <Image className="image-fill" src={featured.image} alt={featured.alt} fill sizes="420px" />
            </div>
          </Link>
          <div className="p-6 md:p-8">
            <div className="text-sm font-black uppercase text-soft">{featured.date} · {featured.readTime}</div>
            <Link href={`/blog/${featured.slug}`}>
              <h3 className="mt-4 text-3xl font-black leading-tight md:text-5xl">{featured.title}</h3>
            </Link>
            <p className="mt-4 text-lg font-bold leading-8 text-muted">{featured.excerpt}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="button-base button-dark" href={`/blog/${featured.slug}`}>
                Читать статью
                <ArrowRight size={19} weight="bold" />
              </Link>
            </div>
          </div>
        </article>

        <div className="grid gap-5">
          {posts.map((post) => (
            <article className="glass-card grid overflow-hidden rounded-card p-4 md:grid-cols-[160px_1fr] md:items-center" key={post.title}>
              <Link className="relative block aspect-square overflow-hidden rounded-panel bg-accent-soft" href={`/blog/${post.slug}`}>
                <Image className="image-fill" src={post.image} alt={post.alt} fill sizes="160px" />
              </Link>
              <div className="grid content-between p-6">
                <div>
                  <div className="text-sm font-black uppercase text-soft">{post.date} · {post.readTime}</div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">{post.title}</h3>
                  </Link>
                  <p className="mt-3 font-bold leading-7 text-muted">{post.excerpt}</p>
                </div>
                <Link className="mt-6 inline-flex items-center gap-2 font-black text-accent-strong" href={`/blog/${post.slug}`}>
                  Читать статью
                  <ArrowRight size={19} weight="bold" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
