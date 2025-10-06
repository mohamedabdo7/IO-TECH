"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import TestimonialCard from "../common/TestimonialCard";

export interface Testimonial {
  id: number;
  image: string;
  quote: string;
  name: string;
  position: string;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const t = useTranslations("TestimonialsSection");
  const params = useParams();
  const locale = params.locale as string;
  const isRTL = locale === "ar";

  const testimonials: Testimonial[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      quote: t("testimonials.testimonial1.quote"),
      name: t("testimonials.testimonial1.name"),
      position: t("testimonials.testimonial1.position"),
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      quote: t("testimonials.testimonial2.quote"),
      name: t("testimonials.testimonial2.name"),
      position: t("testimonials.testimonial2.position"),
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      quote: t("testimonials.testimonial3.quote"),
      name: t("testimonials.testimonial3.name"),
      position: t("testimonials.testimonial3.position"),
    },
  ];

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="h-screen bg-primary flex items-center py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          className={`mb-10 ${isRTL ? "text-right" : "text-left"}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {t("title")}
          </h2>
          <p className="text-white text-base md:text-base leading-relaxed max-w-xl">
            {t("description")}
          </p>
        </motion.div>

        {/* Testimonial Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentTestimonial.id}
              image={currentTestimonial.image}
              quote={currentTestimonial.quote}
              name={currentTestimonial.name}
              position={currentTestimonial.position}
            />
          </AnimatePresence>

          {/* Navigation Buttons - swap positions for RTL */}
          <div
            className={`flex items-center gap-3 mt-8 ${
              isRTL ? "justify-start" : "justify-end"
            }`}
          >
            <button
              onClick={isRTL ? handleNext : handlePrev}
              aria-label={t("previousTestimonial")}
              className="w-10 h-10 rounded-full bg-stone-800/60 hover:bg-stone-700/80 text-white transition-all duration-300 flex items-center justify-center"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5" />
              ) : (
                <ArrowLeft className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={isRTL ? handlePrev : handleNext}
              aria-label={t("nextTestimonial")}
              className="w-10 h-10 rounded-full bg-stone-800/60 text-white hover:bg-stone-700/80 transition-all duration-300 flex items-center justify-center"
            >
              {isRTL ? (
                <ArrowLeft className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
