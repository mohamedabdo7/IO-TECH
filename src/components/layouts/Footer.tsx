"use client";

import { useState } from "react";
import Link from "next/link";
import { Twitter, Facebook, Share2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function ModernFooter() {
  const [email, setEmail] = useState("");
  const t = useTranslations("Footer");
  const params = useParams();
  const locale = params.locale as string;
  const isRTL = locale === "ar";

  const navLinks = [
    { label: t("navigation.about"), href: "#about" },
    { label: t("navigation.strategy"), href: "#strategy" },
    { label: t("navigation.advantages"), href: "#advantages" },
    { label: t("navigation.responsibility"), href: "#responsibility" },
    { label: t("navigation.services"), href: "#services" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="bg-primary text-white mt-6">
      <div className="container mx-auto px-6 py-8">
        {/* Top Section - Subscribe & Social */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 mb-8 ${
            isRTL ? "sm:justify-start" : "justify-center sm:justify-end"
          }`}
        >
          {/* Email Subscribe */}
          <div className="relative">
            <input
              type="email"
              placeholder={t("subscribe.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubscribe(e);
                }
              }}
              className={`py-3 rounded-md bg-white text-gray-900 placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 w-64 ${
                isRTL ? "pr-4 pl-28 text-right" : "pl-4 pr-28 text-left"
              }`}
              dir={isRTL ? "rtl" : "ltr"}
            />
            <button
              type="button"
              onClick={(e) => handleSubscribe(e)}
              className={`absolute top-1/2 -translate-y-1/2 px-5 py-1.5 rounded-md bg-primary hover:bg-amber-800 text-white text-sm font-medium transition-colors ${
                isRTL ? "left-1" : "right-1"
              }`}
            >
              {t("subscribe.button")}
            </button>
          </div>

          {/* Contacts & Social Icons */}
          <div
            className={`flex items-center gap-4 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <span className="text-sm">{t("contacts")}</span>
            <Link
              href="#"
              aria-label={t("socialMedia.twitter")}
              className="hover:text-amber-300 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label={t("socialMedia.facebook")}
              className="hover:text-amber-300 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label={t("socialMedia.googlePlus")}
              className="hover:text-amber-300 transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-8" />

        {/* Bottom Section - Navigation & Copyright */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 ${
            isRTL ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Navigation Links */}
          <nav
            className={`flex flex-wrap gap-6 ${
              isRTL
                ? "justify-center md:justify-end flex-row-reverse"
                : "justify-center md:justify-start"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm hover:text-amber-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div
            className={`text-sm ${
              isRTL ? "text-center md:text-left" : "text-center md:text-right"
            }`}
          >
            {t("copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
}
