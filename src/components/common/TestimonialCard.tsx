"use client";

import { motion } from "framer-motion";

export interface TestimonialCardProps {
  image: string;
  quote: string;
  name: string;
  position: string;
}

export default function TestimonialCard({
  image,
  quote,
  name,
  position,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 items-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Section */}
      <div className="w-full max-w-[280px] mx-auto lg:mx-0">
        <div className="aspect-square rounded-lg overflow-hidden bg-stone-800/30">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between h-full pt-0">
        <blockquote className="text-white/50 text-base lg:text-lg leading-relaxed">
          "{quote}"
        </blockquote>

        <div>
          <h3 className="text-white text-xl lg:text-2xl font-semibold mb-1">
            {name}
          </h3>
          <p className="text-white text-sm">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
