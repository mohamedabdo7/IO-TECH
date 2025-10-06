"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, DollarSign, ArrowRight, ArrowLeft } from "lucide-react";
import { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
  viewMode?: "grid" | "list";
}

export default function ServiceCard({ service, viewMode = "grid" }: ServiceCardProps) {
  const params = useParams();
  const locale = params.locale as string;
  const isRTL = locale === "ar";

  if (viewMode === "list") {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative h-48 md:h-auto">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors">
                {service.title}
              </h3>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {service.category}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-4">
              {service.price && (
                <div className="flex items-center text-sm text-gray-500">
                  <DollarSign className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                  {service.price}
                </div>
              )}
              {service.duration && (
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                  {service.duration}
                </div>
              )}
            </div>
            
            <Link
              href={`/${locale}/services/${service.slug}`}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              {locale === "ar" ? "اقرأ المزيد" : "Read More"}
              {isRTL ? (
                <ArrowLeft className="w-4 h-4 ml-1" />
              ) : (
                <ArrowRight className="w-4 h-4 mr-1" />
              )}
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
            {service.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {service.description}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          {service.price && (
            <div className="flex items-center text-sm text-gray-500">
              <DollarSign className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
              {service.price}
            </div>
          )}
          {service.duration && (
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
              {service.duration}
            </div>
          )}
        </div>
        
        <Link
          href={`/${locale}/services/${service.slug}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
        >
          {locale === "ar" ? "اقرأ المزيد" : "Read More"}
          {isRTL ? (
            <ArrowLeft className="w-4 h-4 ml-1" />
          ) : (
            <ArrowRight className="w-4 h-4 mr-1" />
          )}
        </Link>
      </div>
    </motion.div>
  );
}