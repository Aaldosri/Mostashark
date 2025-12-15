"use client";
import AbouSection from "@/app/Components/AboutSection/page";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-amber-50/20 to-neutral-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(180,83,9,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(180,83,9,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Animated Golden Shapes */}
        <motion.div
          className="absolute top-1/4 -left-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-amber-300/20 to-amber-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-yellow-300/15 to-amber-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div
        dir="rtl"
        className="relative z-10 flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        {/* Image Section - Left */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            {/* Decorative Border */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image Container */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20 border-2 border-amber-600/30"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/img/MainPic0.jpg"
                alt="استشارات قانونية"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>

              {/* Badge on Image */}
              <motion.div
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-lg px-6 py-3 rounded-xl shadow-lg border border-amber-500/20"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.3,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="text-3xl"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⚖️
                  </motion.div>
                  <div className="text-right">
                    <p className="text-amber-600 font-bold text-lg">+15</p>
                    <p className="text-neutral-700 text-sm">سنة خبرة</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section - Right */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full border border-amber-600/30 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-amber-600 ml-2"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-900 text-2xl font-medium">من نحن</span>
          </motion.div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            استشارات مبنية على{" "}
            <span className="relative inline-block">
              <motion.span
                className="relative z-10 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                الخبرة
              </motion.span>
              <motion.span
                className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </span>{" "}
            والاحترافية
          </h2>

          {/* Description */}
          <p className="text-lg text-neutral-700 leading-relaxed">
            مكتب متخصص في تقديم الخدمات والاستشارات القانونية بجودة عالية مبنية
            على الخبرة والاحترافية. نحرص على فهم احتياجات عملائنا بدقة وتقديم
            حلول قانونية فعّالة تضمن حقوقهم وتحقق أهدافهم.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              {
                icon: "🏆",
                title: "خبرة واسعة",
                desc: "أكثر من 15 سنة في المجال القانوني",
              },
              { icon: "✅", title: "نتائج مضمونة", desc: "+500 قضية ناجحة" },
              {
                icon: "🔒",
                title: "سرية تامة",
                desc: "حماية كاملة لمعلومات العملاء",
              },
              {
                icon: "⚡",
                title: "استجابة سريعة",
                desc: "متاحون على مدار الساعة",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-lg rounded-xl border border-amber-500/20 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(251, 191, 36, 0.2)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <motion.div
                  className="text-2xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link href="/Pages/Features">
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-amber-500/30 flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                اعرف المزيد عنا
                <motion.svg
                  className="w-5 h-5"
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
                    strokeWidth="2.5"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <div className="relative z-10 flex justify-center pb-12">
        <motion.button
          onClick={scrollToTop}
          className="group"
          aria-label="العودة للأعلى"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background Circle with Glow */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full blur-lg"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-xl shadow-amber-500/30 border-2 border-white/20">
              {/* Arrow Icon */}
              <motion.svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </motion.svg>
            </div>
          </div>

          {/* Tooltip */}
        </motion.button>
      </div>
    </div>
  );
}
