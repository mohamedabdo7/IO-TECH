"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("HeroSection");

  const slides = [
    {
      title: t("slides.slide1.title"),
      description: t("slides.slide1.description"),
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    },
    {
      title: t("slides.slide2.title"),
      description: t("slides.slide2.description"),
      image:
        "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=1200&q=80",
    },
    {
      title: t("slides.slide3.title"),
      description: t("slides.slide3.description"),
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }

        .slide-enter {
          animation: fadeIn 1s ease-out;
        }

        .content-enter {
          animation: slideUp 0.6s ease-out;
        }

        .profile-enter {
          animation: slideInRight 0.8s ease-out 0.3s backwards;
        }

        .float-animation {
          animation: float 4s ease-in-out infinite;
        }

        .pulse-animation {
          animation: pulse 8s ease-in-out infinite;
        }
      `}</style>

      {/* Background Images with Overlay */}
      <div key={currentSlide} className="absolute inset-0 slide-enter">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        />
        {/* Brown/Sepia Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(271.47deg, rgba(75, 38, 21, 0.28) 1.2%, rgba(75, 38, 21, 0.68) 86.38%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-amber-950/10" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        aria-label={t("previousSlide")}
      >
        <ChevronLeft className="w-6 h-6 mx-auto" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        aria-label={t("nextSlide")}
      >
        <ChevronRight className="w-6 h-6 mx-auto" />
      </button>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-16 flex items-center z-20">
        <div className="max-w-xl lg:max-w-lg">
          <div key={currentSlide} className="content-enter">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/85 mb-6 leading-relaxed max-w-lg">
              {slides[currentSlide].description}
            </p>

            {/* CTA Button */}
            <button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              <span className="flex items-center gap-2">
                {t("readMore")}
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Profile Image Card */}
        <div className="hidden lg:block absolute right-12 xl:right-24 top-1/2 -translate-y-1/2 profile-enter">
          <div className="relative group">
            {/* Card with shadow */}
            <div className="relative w-56 h-72 rounded-2xl overflow-hidden shadow-2xl bg-amber-900/20">
              {/* Profile Image - crisp and clear */}
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90"
                alt={t("professional")}
                fill
                className="object-cover"
                priority
              />

              {/* Very subtle bottom gradient only */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Glow Effect on Hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(251,191,36,0.15) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-8 z-30 flex flex-col gap-3">
        {slides.map((_, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide
                ? "bg-white h-12"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`${t("goToSlide")} ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Animated Shape */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none pulse-animation" />
    </section>
  );
};

export default HeroSection;
