"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import { Service } from "@/lib/services";
import { useTranslations } from "next-intl";

interface ServiceCardProps {
  service: Service;
  locale: string;
}

export default function ServiceCard({ service, locale }: ServiceCardProps) {
  const t = useTranslations("ServicesPage");
  const isRTL = locale === "ar";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {service.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          {service.price && (
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <DollarSign className="w-4 h-4" />
              <span>{service.price}</span>
            </div>
          )}
          {service.duration && (
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <Clock className="w-4 h-4" />
              <span>{service.duration}</span>
            </div>
          )}
        </div>

        <Link
          href={`/${locale}/services/${service.slug}`}
          className="inline-flex items-center space-x-2 rtl:space-x-reverse text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
        >
          <span>{t("learnMore")}</span>
          <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
        </Link>
      </div>
    </motion.div>
  );
}
