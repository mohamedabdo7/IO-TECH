"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Clock, DollarSign, CheckCircle, Star } from "lucide-react";
import { Service } from "@/lib/services";
import Image from "next/image";

interface ServiceDetailContentProps {
  service: Service;
}

export default function ServiceDetailContent({
  service,
}: ServiceDetailContentProps) {
  const t = useTranslations("ServiceDetail");
  const params = useParams();
  const locale = params.locale as string;
  const isRTL = locale === "ar";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-primary">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl opacity-90">{service.description}</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 mb-8"
            >
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {t("aboutService")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.content}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {t("keyFeatures")}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {t("benefits")}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6 sticky top-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                {t("serviceDetails")}
              </h3>

              <div className="space-y-4 mb-6">
                {service.price && (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">
                        {t("price")}
                      </span>
                      <span className="font-semibold text-gray-800">
                        {service.price}
                      </span>
                    </div>
                  </div>
                )}

                {service.duration && (
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">
                        {t("duration")}
                      </span>
                      <span className="font-semibold text-gray-800">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                {t("getQuote")}
              </button>

              <button className="w-full mt-3 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-300">
                {t("contactUs")}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
