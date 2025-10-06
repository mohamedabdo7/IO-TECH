"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LangSwitcher from "@/components/LangSwitcher";
import { useParams } from "next/navigation";
import { routes } from "@/config/routes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navigation");
  const params = useParams();
  const locale = params.locale as string;

  const navLinks = [
    { href: routes.home(locale), label: t("home") },
    { href: routes.about(locale), label: t("about") },
    { href: routes.services(locale), label: t("services") },
    { href: routes.blog(locale), label: t("blog") },
    { href: routes.team(locale), label: t("team") },
    { href: routes.contact(locale), label: t("contact") },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const handleNavClick = (href: string) => {
    console.log(`Navigating to ${href}`);
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Empty left space for symmetry */}
            <div className="w-10 lg:w-20"></div>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="relative group px-4 py-2 transition-all duration-300 cursor-pointer"
                    onClick={() => handleNavClick(link.href)}
                  >
                    <span className="relative z-10 text-white/95 group-hover:text-white transition-colors duration-300 font-normal text-sm tracking-wide">
                      {link.label}
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Section - Search and CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Search Icon */}
              <Link href={routes.search(locale)}>
                <motion.button
                  className="p-2.5 text-white/80 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </motion.button>
              </Link>

              {/* Language Switcher */}
              <LangSwitcher />

              {/* Book Appointment Button */}
              <motion.button
                className="px-6 py-2.5 border border-white/40 text-white font-normal text-sm rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(255,255,255,0.8)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                onClick={() => console.log("Book Appointment clicked")}
              >
                {t("bookAppointment")}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <LangSwitcher />

              {/* Mobile Search Icon */}
              <Link href={routes.search(locale)}>
                <motion.button
                  className="p-2 text-white/80 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </motion.button>
              </Link>

              <motion.button
                onClick={toggleMenu}
                className="relative p-2 text-white hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: -4 },
                      open: { rotate: 45, y: 0 },
                    }}
                    className="w-6 h-0.5 bg-current block mb-1"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    className="w-6 h-0.5 bg-current block mb-1"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 4 },
                      open: { rotate: -45, y: 0 },
                    }}
                    className="w-6 h-0.5 bg-current block"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Subtle bottom border that appears on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <motion.h3
                    className="text-white font-medium text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {t("menu")}
                  </motion.h3>
                  <motion.button
                    onClick={toggleMenu}
                    className="p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-1 px-6 py-8 space-y-1 overflow-y-auto">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 + 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="group block px-4 py-4 rounded-lg transition-all duration-300 hover:bg-white/10 cursor-pointer border-b border-white/5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white/90 group-hover:text-white transition-colors duration-300 font-normal text-base">
                            {link.label}
                          </span>
                          <motion.div
                            initial={{ x: -5, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            className="text-white/60 group-hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Footer with CTA */}
                <div className="p-6 border-t border-white/10">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="w-full px-5 py-3.5 border border-white/40 text-white font-normal rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      console.log("Book Appointment clicked");
                      setIsMenuOpen(false);
                      document.body.style.overflow = "unset";
                    }}
                  >
                    {t("bookAppointment")}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
