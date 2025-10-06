"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState } from "react";

const LangSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = params.locale as string;
  const isRTL = currentLocale === "ar";

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  const switchLanguage = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-3 py-2 text-white/80 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 ${
          isRTL ? "space-x-reverse space-x-2" : "space-x-2"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
      </motion.button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-full mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/20 z-20 ${
              isRTL ? "left-0" : "right-0"
            }`}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`w-full flex items-center px-4 py-3 hover:bg-gray-100/50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  currentLocale === language.code
                    ? "bg-blue-50/50 text-blue-600"
                    : "text-gray-700"
                } ${
                  isRTL
                    ? "space-x-reverse space-x-3 text-right"
                    : "space-x-3 text-left"
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default LangSwitcher;
