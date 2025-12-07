import React from "react";
import { Scale } from "lucide-react";
import { motion } from "framer-motion";

export default function IntroMain() {
  return (
    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
      {/* Badge */}
      <div className="animate-reveal [animation-delay:0.2s] flex justify-center lg:justify-start">
        <div className="inline-flex items-center px-3 py-1.5 border border-amber-600/30 rounded-full bg-white/80 backdrop-blur-lg transform hover:scale-105 transition-transform shadow-lg shadow-amber-500/10">
          <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></div>

          <span className="mr-1 text-xs sm:text-sm text-amber-900 tracking-wider">
            <Scale />
          </span>
        </div>
      </div>

      {/* Main Title */}
      <div
        dir="rtl"
        className="animate-reveal [animation-delay:0.4s] text-right"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="inline-block bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
            مستشارك
          </span>
          <span className="block mt-2 text-neutral-900">
            للاستشارات القانونية
          </span>
        </h1>
      </div>

      {/* Description */}
      <p className="text-base text-right sm:text-lg text-neutral-700 max-w-xl mx-auto lg:mx-0 animate-reveal [animation-delay:0.6s]">
        نقدم استشارات قانونية موثوقة وسريعة لتلبية احتياجاتك القانونية
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        {/* Primary Button */}
        <motion.button
          className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg"></div>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          <div className="relative flex items-center justify-center gap-2">
            <span className="text-white font-medium">تواصل معنا</span>
            <motion.svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, -3, 0] }}
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

        {/* Secondary Button */}
        <motion.button
          className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-amber-600/40 bg-white/60 backdrop-blur-lg text-amber-900 min-w-[160px] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderColor: "rgba(217, 119, 6, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Shine Effect on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />

          <span className="relative font-medium">تعرف على خدماتنا</span>
        </motion.button>
      </div>
    </div>
  );
}
