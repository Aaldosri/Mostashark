"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-amber-950 to-neutral-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Animated Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl"></div>

      <div
        dir="rtl"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="w-24 sm:w-28 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/img/Law.png"
                  alt="Logo"
                  className="w-full h-auto drop-shadow-lg"
                />
              </motion.div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              مكتب متخصص في تقديم الخدمات والاستشارات القانونية بجودة عالية
              مبنية على الخبرة والاحترافية
            </p>

            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="p-2 bg-white/5 hover:bg-amber-500/20 rounded-lg border border-white/10 hover:border-amber-500/50 transition-all"
              >
                <Facebook className="w-5 h-5 text-amber-400" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="p-2 bg-white/5 hover:bg-amber-500/20 rounded-lg border border-white/10 hover:border-amber-500/50 transition-all"
              >
                <Twitter className="w-5 h-5 text-amber-400" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="p-2 bg-white/5 hover:bg-amber-500/20 rounded-lg border border-white/10 hover:border-amber-500/50 transition-all"
              >
                <Instagram className="w-5 h-5 text-amber-400" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="p-2 bg-white/5 hover:bg-amber-500/20 rounded-lg border border-white/10 hover:border-amber-500/50 transition-all"
              >
                <Linkedin className="w-5 h-5 text-amber-400" />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                "الرئيسية",
                "من نحن",
                "خدماتنا",
                "لماذا تختارنا",
                "تواصل معنا",
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 transition-all duration-300"></span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {[
                "القضايا الجنائية",
                "القضايا المدنية",
                "الاستشارات القانونية",
                "قضايا الأسرة",
                "القضايا العمالية",
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 transition-all duration-300"></span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-neutral-400">
                  <p className="font-medium text-white">
                    المملكة العربية السعودية
                  </p>
                  <p>الرياض</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="tel:+966501234567"
                  className="text-neutral-400 hover:text-amber-400 transition-colors"
                >
                  +966 50 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a
                  href="https://wa.me/966501234567"
                  className="text-neutral-400 hover:text-green-400 transition-colors"
                >
                  واتساب: +966 50 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="mailto:info@lawfirm.sa"
                  className="text-neutral-400 hover:text-amber-400 transition-colors"
                >
                  info@lawfirm.sa
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-neutral-400 text-sm text-center md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            © {currentYear} مستشارك القانوني. جميع الحقوق محفوظة
          </motion.p>

          <motion.div
            className="flex gap-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#"
              className="text-neutral-400 hover:text-amber-400 transition-colors"
            >
              سياسة الخصوصية
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href="#"
              className="text-neutral-400 hover:text-amber-400 transition-colors"
            >
              الشروط والأحكام
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
    </footer>
  );
}
