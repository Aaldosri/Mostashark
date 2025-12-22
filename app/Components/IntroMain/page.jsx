"use client";

import React from "react";
import { Scale } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IntroMain() {
  return (
    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
      {/* Badge */}
      <motion.div
        className="flex justify-center lg:justify-start"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="inline-flex items-center px-3 py-1.5 border border-amber-600/30 rounded-full bg-white/80 backdrop-blur-lg shadow-lg shadow-amber-500/10"
          whileHover={{ scale: 1.1, rotate: -2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-amber-600"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.span
            className="mr-1 text-amber-900"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Scale className="w-5 h-5" />
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Main Title */}
      <motion.div
        dir="rtl"
        className="text-right"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <motion.span
            className="inline-block bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% auto" }}
          >
            مستشارك
          </motion.span>
          <motion.span
            className="block mt-2 text-neutral-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            للاستشارات القانونية
          </motion.span>
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-base text-right sm:text-lg text-neutral-700 max-w-xl mx-auto lg:mx-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        نقدم استشارات قانونية موثوقة وسريعة لتلبية احتياجاتك القانونية
      </motion.p>

      {/* CTA */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {/* Primary Button */}
        <Link href="/Pages/Contact">
          <motion.button
            className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px] overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% auto" }}
            />

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            />

            <div className="relative flex items-center justify-center gap-2">
              <span className="text-white font-medium">تواصل معنا</span>
              <motion.svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, -4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </div>
          </motion.button>
        </Link>

        {/* Secondary Button */}
        <Link href="/Pages/Services">
          <motion.button
            className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-amber-600/40 bg-white/60 backdrop-blur-lg text-amber-900 min-w-[160px] relative overflow-hidden"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderColor: "rgba(217, 119, 6, 0.7)",
              boxShadow: "0 10px 30px rgba(251, 191, 36, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.3), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["200% 0", "-200% 0"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Shine Effect on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />

            {/* Particles Effect */}
            <motion.div
              className="absolute inset-0"
              whileHover={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            <span className="relative font-medium">تعرف على خدماتنا</span>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
