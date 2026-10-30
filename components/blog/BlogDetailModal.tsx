"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Clock, Calendar, Sparkles, CheckCircle2, ArrowRight, User } from "lucide-react";
import { BlogArticle } from "@/data/blogsData";
import { Button } from "@/components/ui/Button";

interface BlogDetailModalProps {
  article: BlogArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: () => void;
}

export function BlogDetailModal({
  article,
  isOpen,
  onClose,
  onBookAppointment,
}: BlogDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-clinic-2xl shadow-elevated z-10 my-8 overflow-hidden animate-in zoom-in-95 duration-200 border border-[#E8E9E5]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close article"
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-[#252724] hover:bg-[#F7F7F5] shadow-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a774b]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          {/* Top Article Hero Image */}
          <div className="relative h-64 sm:h-80 w-full bg-[#111310]">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt}
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full bg-[#8f9d6f] text-[#111310]">
                  {article.categoryLabel}
                </span>
                <span className="text-white/80 flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
                <span className="text-white/60">·</span>
                <span className="text-white/80 font-mono text-[11px]">
                  {article.publishDate}
                </span>
              </div>

              <h2 id="article-modal-title" className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                {article.title}
              </h2>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Author Attribution Strip */}
            <div className="flex items-center gap-3 pb-6 border-b border-[#E8E9E5] text-xs text-[#858780]">
              <div className="w-10 h-10 rounded-full bg-[#8f9d6f]/40 flex items-center justify-center text-[#6a774b] font-bold">
                <User className="w-5 h-5 text-[#6a774b]" />
              </div>
              <div>
                <p className="font-semibold text-[#252724]">{article.author}</p>
                <p className="text-[11px] text-[#858780]">{article.authorRole} · Saibaba Colony, Coimbatore</p>
              </div>
            </div>

            {/* Introduction Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#252724] font-medium leading-relaxed">
              {article.content.intro}
            </p>

            {/* Content Sections */}
            <div className="space-y-6">
              {article.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#252724]">
                    {section.heading}
                  </h3>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-[#858780] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Doctor's Clinical Tips Callout */}
            {article.content.clinicalTips && article.content.clinicalTips.length > 0 && (
              <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-[#E8E9E5] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6a774b] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6a774b]" />
                  <span>Clinical Tips from Dr. Preethi</span>
                </h4>
                <ul className="space-y-2.5">
                  {article.content.clinicalTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252724]">
                      <CheckCircle2 className="w-4 h-4 text-[#6a774b] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Clinical Takeaway */}
            <div className="p-5 rounded-2xl bg-[#8f9d6f]/20 border border-[#8f9d6f]/30 text-xs sm:text-sm text-[#252724] leading-relaxed">
              <strong className="text-[#6a774b] uppercase tracking-wide block pb-1 text-[11px]">
                Key Takeaway
              </strong>
              <p>{article.content.takeaway}</p>
            </div>

            {/* Footer Consultation Action */}
            <div className="pt-6 border-t border-[#E8E9E5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#858780] text-center sm:text-left">
                <p className="font-medium text-[#252724]">Have questions about your smile?</p>
                <p>Request an unhurried consultation at Dr. Preethi’s Dentistry.</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto"
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    onClose();
                    onBookAppointment();
                  }}
                  className="w-1/2 sm:w-auto"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

