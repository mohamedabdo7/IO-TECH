"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import TeamMemberCard from "../common/TeamMemberCard";

// Types
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
}

export default function OurTeamSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const t = useTranslations("OurTeamSection");
  const params = useParams();
  const locale = params.locale as string;
  const isRTL = locale === "ar";

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Anderson",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      phone: "+1234567890",
      email: "john@example.com",
      whatsapp: "1234567890",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
      phone: "+1234567891",
      email: "sarah@example.com",
      whatsapp: "1234567891",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
      phone: "+1234567892",
      email: "michael@example.com",
      whatsapp: "1234567892",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      position: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
      phone: "+1234567893",
      email: "emily@example.com",
      whatsapp: "1234567893",
    },
  ];

  const itemsPerPage =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = Math.max(0, teamMembers.length - itemsPerPage);

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleMembers = teamMembers.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className={`text-center max-w-2xl mx-auto mb-12 ${
            isRTL ? "text-right" : "text-left"
          }`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center md:text-5xl font-bold text-primary mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t("description")}</p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - swap for RTL */}
          <button
            onClick={isRTL ? handleNext : handlePrev}
            aria-label={t("previousMember")}
            className={`absolute ${
              isRTL
                ? "right-0 -translate-x-4 md:-translate-x-12"
                : "left-0 -translate-x-4 md:-translate-x-12"
            } top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center group`}
          >
            {isRTL ? (
              <ChevronRight className="w-6 h-6" />
            ) : (
              <ChevronLeft className="w-6 h-6" />
            )}
          </button>

          <button
            onClick={isRTL ? handlePrev : handleNext}
            aria-label={t("nextMember")}
            className={`absolute ${
              isRTL
                ? "left-0 translate-x-4 md:translate-x-12"
                : "right-0 translate-x-4 md:translate-x-12"
            } top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center group`}
          >
            {isRTL ? (
              <ChevronLeft className="w-6 h-6" />
            ) : (
              <ChevronRight className="w-6 h-6" />
            )}
          </button>

          {/* Cards Grid */}
          <div className="overflow-hidden px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6"
                initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 100 : -100 }}
                transition={{ duration: 0.4 }}
              >
                {visibleMembers.map((member) => (
                  <TeamMemberCard
                    key={member.id}
                    name={member.name}
                    position={member.position}
                    image={member.image}
                    phone={member.phone}
                    email={member.email}
                    whatsapp={member.whatsapp}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`${t("goToSlide")} ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
