"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

// Types
interface ContactLink {
  icon: typeof Phone | typeof MessageCircle | typeof Mail;
  href: string;
  label: string;
  show?: string;
}

export interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
}

export default function TeamMemberCard({
  name,
  position,
  image,
  phone,
  email,
  whatsapp,
}: TeamMemberCardProps) {
  const contactLinks: ContactLink[] = [
    {
      icon: MessageCircle,
      href: `https://wa.me/${whatsapp}`,
      label: "WhatsApp",
      show: whatsapp,
    },
    { icon: Phone, href: `tel:${phone}`, label: "Phone", show: phone },
    { icon: Mail, href: `mailto:${email}`, label: "Email", show: email },
  ];

  return (
    <motion.div
      className="group relative flex-shrink-0 w-full max-w-[280px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative bg-white  overflow-hidden  transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gray-200">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-5 text-center bg-transparent">
          <h3 className="text-lg font-bold text-primary mb-1">{name}</h3>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">
            {position}
          </p>

          {/* Contact Icons */}
          <div className="flex items-center justify-center gap-4">
            {contactLinks.map((contact) => {
              if (!contact.show) return null;
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  aria-label={contact.label}
                  className="text-black hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
