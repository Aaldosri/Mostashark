"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone, Scale } from "lucide-react";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY;

    if (latest > previous && latest > 50) {
      // Scrolling down - hide completely
      setIsHidden(true);
    } else if (latest < previous) {
      // Scrolling up - show
      setIsHidden(false);
    }

    setLastScrollY(latest);
  });

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/Pages/Services", label: "خدماتنا" },
    { href: "/Pages/Features", label: "لماذا تختارنا" },
    { href: "/Pages/Contact", label: "تواصل معنا" },
  ];

  return (
    <motion.nav
      dir="rtl"
      className="fixed top-0 left-0 right-0 z-50 w-full"
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Dark Background with Transparency */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-amber-950/80 to-neutral-900/80 backdrop-blur-lg"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="w-20 sm:w-24 cursor-pointer"
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

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={link.href}>
                  <motion.span
                    className="relative group cursor-pointer font-medium text-neutral-200 hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base"
                    whileHover={{ y: -2 }}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/Pages/Contact">
              <motion.button
                className="group relative px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg shadow-lg shadow-amber-500/30 overflow-hidden text-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(251, 191, 36, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                <span className="relative flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  احجز استشارة
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-200 hover:text-amber-400 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden pb-4 border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-1 pt-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={link.href}>
                    <motion.div
                      className="block py-3 px-4 text-neutral-200 font-medium hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all duration-300"
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}

              {/* Mobile CTA */}
              <motion.li
                className="pt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link href="/Pages/Contact">
                  <motion.button
                    className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    احجز استشارة
                  </motion.button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
    </motion.nav>
  );
}
