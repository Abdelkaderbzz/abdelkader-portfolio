'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { contentfulClient } from '@/lib/contentfulClient';
import SectionHeader from '@/components/SectionHeader';

interface ContentfulAsset {
  fields: {
    file: {
      url: string;
    };
  };
}

interface Article {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
  platform: 'medium' | 'devto';
  image: ContentfulAsset;
  readTime: string;
  authorName: string;
  authorImage: ContentfulAsset;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: 'article' })
      .then((response) => {
        setArticles(
          response.items.map((item) => ({
            id: item.sys.id,
            ...(item.fields as unknown as Article),
          }))
        );
      })
      .catch(console.error);
  }, []);

  return (
    <section
      id="articles"
      className="section-padding border-t border-[hsl(var(--paper-line))]"
    >
      <div className="container-tight">
        <SectionHeader
          index="05"
          label="Writing"
          title="Articles & notes"
          description="Thoughts on web development, design, and building products."
        />

        <div className="border-t border-[hsl(var(--paper-line))]">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-center py-7 border-b border-[hsl(var(--paper-line))] transition-colors"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <span>{article.platform === 'medium' ? 'Medium' : 'Dev.to'}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span>{article.date}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl tracking-[-0.01em] transition-colors group-hover:text-brand">
                  {article.title}
                </h3>
                <p className="text-muted-foreground line-clamp-1 mt-1 max-w-2xl">
                  {article.description}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground group-hover:text-brand transition-colors">
                Read
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
