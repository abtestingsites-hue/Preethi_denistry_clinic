"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { blogArticles, BlogArticle } from "@/data/blogsData";
import { BlogDetailModal } from "@/components/blog/BlogDetailModal";

interface BlogSectionProps {
  onBookAppointment: () => void;
}

export function BlogSection({ onBookAppointment }: BlogSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenArticle = (article: BlogArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  // Three article previews on desktop as requested by Section 11
  const displayArticles = blogArticles.slice(0, 3);

  return (
    <section
      id="blogs"
      aria-label="The Smile Journal — Dental Education and Articles"
      className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#E8E9E5]"
    >
      <div className="content-container space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="max-w-xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5C7651]">
            <Sparkles className="w-3.5 h-3.5 text-[#5C7651]" />
            <span>DENTAL EDUCATION & INSIGHTS</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252724] tracking-tight leading-[1.18]">
            The Smile Journal.
          </h2>
          <p className="text-sm text-[#858780] leading-relaxed">
            Clinician-reviewed guides on clear aligners, consultation expectations, and daily oral hygiene to support your dental health.
          </p>
        </div>

        {/* 3 Article Previews Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleOpenArticle(article)}
              className="group rounded-card overflow-hidden border border-[#E8E9E5] bg-white shadow-subtle hover:shadow-card hover:border-[#A9C49A] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail (Restrained height 180–200px) */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#111310]">
                <Image
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/95 text-[#252724] shadow-subtle">
                    {article.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-[#858780] font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#5C7651]" />
                      {article.readTime}
                    </span>
                    <span>·</span>
                    <span>{article.publishDate}</span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#252724] group-hover:text-[#5C7651] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#858780] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E9E5] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#5C7651] group-hover:underline inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>

                  <span className="text-[11px] text-[#858780]">
                    By {article.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reusable Article Detail Reading Template / Modal */}
      <BlogDetailModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBookAppointment={onBookAppointment}
      />
    </section>
  );
}
