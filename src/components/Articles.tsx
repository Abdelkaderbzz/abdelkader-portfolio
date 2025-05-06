'use client';

import React, { useEffect, useState } from 'react';
import { ExternalLink, MessageSquare, Heart } from 'lucide-react';
import { useAnimateOnScroll, useStaggeredAnimation } from '@/lib/animations';
import { contentfulClient } from '@/lib/contentfulClient';

// Types
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
  likes?: number;
  comments?: number;
  authorName: string;
  authorImage: ContentfulAsset;
}

interface ArticlesProps {
  title?: string;
  subtitle?: string;
  description?: string;
  articles?: Article[];
  className?: string;
}

const ArticleCard = ({
  article,
  animStyle,
}: {
  article: Article;
  animStyle?: React.CSSProperties;
}) => {
  return (
    <a
      href={article.link}
      target='_blank'
      rel='noopener noreferrer'
      className='group bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 shadow-md flex flex-col md:flex-row p-5'
      style={animStyle}
    >
      <div className='p-6 flex flex-col flex-grow'>
        <div className='flex items-center mb-3'>
          {article && (
            <>
              <img
                src={article.authorImage.fields.file.url}
                alt={article.authorName}
                className='w-10 h-10 rounded-full mr-3'
              />
              <div className='flex flex-col'>
                <span className='font-medium'>{article.authorName}</span>
                <span className='text-sm text-muted-foreground'>
                  {article.date}
                </span>
              </div>
            </>
          )}
          <span
            className={`ml-auto px-2 py-1 text-xs font-medium rounded-full ${
              article.platform === 'medium'
                ? 'bg-black text-white'
                : 'bg-indigo-600 text-white'
            }`}
          >
            {article.platform === 'medium' ? 'Medium' : 'Dev.to'}
          </span>
        </div>

        <h3 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300'>
          {article.title}
        </h3>

        <p className='text-muted-foreground mb-4 line-clamp-2'>
          {article.description}
        </p>

        <div className='mt-auto flex items-center text-muted-foreground text-sm'>
          {article.likes !== undefined && (
            <div className='flex items-center mr-4'>
              <Heart size={16} className='mr-1' />
              <span>{article.likes.toLocaleString()}</span>
            </div>
          )}
          {article.comments !== undefined && (
            <div className='flex items-center mr-4'>
              <MessageSquare size={16} className='mr-1' />
              <span>{article.comments}</span>
            </div>
          )}
          <span className='ml-auto'>{article.readTime}</span>
        </div>
      </div>
      <div className='md:flex-[0_0_35%] lg:flex-[0_0_28%] relative overflow-hidden'>
        <img
          src={article.image.fields.file.url}
          alt={article.title}
          className='w-full h-full object-cover aspect-video md:aspect-auto rounded-md'
        />
      </div>
    </a>
  );
};

const Articles = ({
  title = 'Articles',
  subtitle = 'My Publications',
  description = 'I regularly write about web development, design patterns, and best practices on Medium and Dev.to.',
  articles: initialArticles,
  className = '',
}: ArticlesProps) => {
  const [articles, setArticles] = useState<Article[]>(initialArticles || []);
  const { isVisible: headerVisible, ref: headerRef } = useAnimateOnScroll();
  const articleAnimItems = useStaggeredAnimation(articles.length, 0.1);

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: 'article' })
      .then((response) => {
        const items = response.items.map((item) => {
          const fields = item.fields as unknown as Article;
          return {
            id: item.sys.id,
            ...fields,
          };
        });
        setArticles(items);
      })
      .catch(console.error);
  }, [initialArticles]);

  return (
    <section id='articles' className={`bg-secondary/10 pb-8 ${className}`}>
      <div className='container-tight'>
        <div
          ref={headerRef}
          className={`mb-16 text-center ${
            headerVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className='text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2'>
            {title}
          </h2>
          <h3 className='text-3xl md:text-4xl font-bold mb-4'>{subtitle}</h3>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            {description}
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              animStyle={{
                opacity: 0,
                transform: 'translateY(15px)',
                animationName: 'fade-in-up',
                animationDuration: '0.5s',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
