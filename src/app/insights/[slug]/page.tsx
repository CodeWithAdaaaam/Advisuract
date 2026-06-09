"use client";

import { notFound, useParams } from "next/navigation";
import { insights } from "@/data/insights";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export async function generateStaticParams() {
  return Object.keys(insights).map((slug) => ({ slug }));
}

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { lang } = useLanguage();

  const article = insights[slug];
  if (!article) return notFound();

  const content = article[lang];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="pt-40 pb-10 px-6 max-w-3xl mx-auto">
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
          {content.category}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
        <p className="text-gray-400 text-sm">
          {new Date(article.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric", month: "long", year: "numeric",
          })}
        </p>
      </section>

      {/* COVER */}
      {article.cover && (
        <div className="max-w-3xl mx-auto px-6 mb-10">
          <Image
            src={article.cover}
            alt={content.title}
            width={800}
            height={400}
            className="w-full rounded-xl object-cover max-h-96"
            unoptimized
          />
        </div>
      )}

      {/* CONTENT */}
      <section className="px-6 max-w-3xl mx-auto pb-20">
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          {content.blocks.map((block, i) => (
            <p key={i} className="mb-6 leading-relaxed">{block.body}</p>
          ))}
        </div>
      </section>

    </main>
  );
}