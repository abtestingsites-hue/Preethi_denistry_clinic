"use client";

import React, { useState } from "react";
import { Plus, Minus, Sparkles, HelpCircle } from "lucide-react";
import { faqData } from "@/data/faqData";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  onBookAppointment?: () => void;
}

export function FAQAccordion({ onBookAppointment }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0].id]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-14 sm:py-18 lg:py-20 bg-[#F7F8F5] border-b border-[#E8E9E5]"
    >
      <div className="content-container">
        {/* Simple Narrow Centered Layout (max-w-3xl) */}
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5C7651]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252724] tracking-tight leading-[1.18]">
              Questions Before Your Visit?
            </h2>
            <p className="text-xs sm:text-sm text-[#858780] max-w-lg mx-auto leading-relaxed">
              Common questions regarding our appointment booking process, Invisalign clear aligners, and clinical consultation protocols in Saibaba Colony.
            </p>
          </div>

          {/* Narrow Accordion with Thin Dividers */}
          <div className="space-y-2.5">
            {faqData.map((item, index) => {
              const isOpen = openIds.includes(item.id);
              const questionId = `faq-q-${item.id}`;
              const answerId = `faq-a-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={cn(
                    "rounded-card-sm border transition-all duration-300 overflow-hidden bg-white",
                    isOpen
                      ? "border-[#A9C49A] shadow-subtle"
                      : "border-[#E8E9E5] hover:border-[#858780]/40"
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      id={questionId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleItem(item.id)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#5C7651] font-semibold">
                          0{index + 1}
                        </span>
                        <span className="font-serif text-base sm:text-lg font-semibold text-[#252724]">
                          {item.question}
                        </span>
                      </span>

                      <span
                        className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors",
                          isOpen
                            ? "bg-[#5C7651] text-white"
                            : "bg-[#F7F8F5] text-[#252724]"
                        )}
                      >
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className={cn(
                      "transition-all duration-300 ease-in-out px-5 text-xs sm:text-sm text-[#858780] leading-relaxed",
                      isOpen
                        ? "max-h-96 pb-5 pt-0.5 opacity-100"
                        : "max-h-0 pb-0 pt-0 opacity-0 overflow-hidden"
                    )}
                  >
                    <p className="pl-6 border-l-2 border-[#C7DDB0]">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Enquiry Prompt */}
          <div className="p-4 rounded-card-sm bg-white border border-[#E8E9E5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-subtle">
            <div className="flex items-center gap-2.5 text-[#252724]">
              <HelpCircle className="w-4 h-4 text-[#5C7651] shrink-0" />
              <span>Have a specific clinical or scheduling question?</span>
            </div>
            {onBookAppointment && (
              <button
                type="button"
                onClick={onBookAppointment}
                className="font-semibold text-[#5C7651] hover:underline shrink-0"
              >
                Ask in Your Appointment Request
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
