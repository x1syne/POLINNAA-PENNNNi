import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Newspaper } from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/pages/PageIntro";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteShell } from "@/components/site/SiteShell";
import { site } from "@/data/site";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return site.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = site.posts.find((item) => item.slug === slug);

  return {
    title: post ? `${post.title} - Grooming Salon` : "Статья - Grooming Salon",
    description: post?.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = site.posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell>
      <PageIntro kicker="Блог" title={post.title} text={post.excerpt} icon={Newspaper} />

      <article className="section pt-0">
        <div className="grid gap-8 2xl:grid-cols-[0.72fr_1fr]">
          <div className="glass-card h-fit rounded-card p-5">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-panel bg-accent-soft">
              <Image className="image-fill" src={post.image} alt={post.alt} fill sizes="520px" priority />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="button-base button-muted" href="/blog">
                <ArrowLeft size={20} weight="bold" />
                Все статьи
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-card p-6 md:p-10">
            <div className="mb-8 text-sm font-black uppercase text-soft">
              {post.date} · Читать {post.readTime}
            </div>
            <div className="grid gap-6 text-xl font-bold leading-9 text-muted">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>

      <ContactSection />
    </SiteShell>
  );
}
