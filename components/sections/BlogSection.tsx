"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock, Sparkles, BookOpen } from "lucide-react";
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

  // Three article previews on desktop as requested by Section 11 & Requirement 6
  const displayArticles = blogArticles.slice(0, 3);

  return (
    <section
      id="blogs"
      aria-label="The Smile Journal — Dental Education and Articles"
      className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#E8E9E5] scroll-mt-20"
    >
      <div className="content-container space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5C7651]">
            <Sparkles className="w-3.5 h-3.5 text-[#5C7651]" />
            <span>DENTAL EDUCATION & INSIGHTS</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252724] tracking-tight leading-[1.18]">
            The Smile Journal.
          </h2>
          <p className="text-sm sm:text-base text-[#858780] leading-relaxed">
            Clinician-reviewed guides on clear aligners, consultation expectations, and daily oral hygiene to support your dental health.
          </p>
        </div>

        {/* Responsive Grid with Consistent Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {displayArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => handleOpenArticle(article)}
              className="group rounded-card overflow-hidden border border-[#E8E9E5] bg-white shadow-subtle hover:shadow-elevated hover:border-[#C7DDB0]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
            >
              {/* Image Presentation with Subtle Zoom Effect */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F7F8F5]">
                <Image
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Category Pill Tag */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#252724] shadow-subtle border border-white/60">
                    {article.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body & Content Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Reading Metadata */}
                  <div className="flex items-center gap-2 text-[11px] text-[#858780] font-mono">
                    <span className="inline-flex items-center gap-1 font-sans text-[#5C7651] font-medium">
                      <Clock className="w-3 h-3 text-[#5C7651]" />
                      {article.readTime}
                    </span>
                    <span>·</span>
                    <span>{article.publishDate}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#252724] group-hover:text-[#5C7651] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  {/* Description Excerpt */}
                  <p className="text-xs sm:text-sm text-[#858780] leading-relaxed line-clamp-3 font-normal">
                    {article.excerpt}
                  </p>
                </div>

                {/* Card Footer: Read Article Link */}
                <div className="pt-3.5 border-t border-[#E8E9E5] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#5C7651] group-hover:text-[#496041] inline-flex items-center gap-1.5 transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>

                  <span className="text-[11px] text-[#858780]">
                    By {article.author}
                  </span>
                </div>
              </div>
            </article>
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
