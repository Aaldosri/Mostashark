"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Users,
  Calendar,
  Scale,
  Award,
  Shield,
  CheckCircle,
  Target,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react";
import Link from "next/link";

// Counter Component with Animation
function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={counterRef} className="font-bold">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// Stats Data
const STATS = [
  {
    id: 1,
    icon: Users,
    value: 500,
    suffix: "+",
    label: "عميل راضٍ",
    duration: 2000,
    color: "from-amber-500 to-amber-600",
    description: "عميل يثق بخدماتنا",
  },
  {
    id: 2,
    icon: Calendar,
    value: 15,
    suffix: "+",
    label: "سنة خبرة",
    duration: 1500,
    color: "from-amber-600 to-yellow-600",
    description: "من الخبرة القانونية",
  },
  {
    id: 3,
    icon: CheckCircle,
    value: 1200,
    suffix: "+",
    label: "قضية ناجحة",
    duration: 2500,
    color: "from-amber-500 to-amber-700",
    description: "قضية تم حلها بنجاح",
  },
  {
    id: 4,
    icon: Award,
    value: 98,
    suffix: "%",
    label: "نسبة النجاح",
    duration: 2000,
    color: "from-yellow-500 to-amber-600",
    description: "معدل نجاحنا في القضايا",
  },
];

// Features Data
const FEATURES = [
  {
    id: 1,
    icon: Shield,
    title: "خبرة واسعة",
    description:
      "فريق من المحامين ذوي الخبرة الطويلة في مختلف المجالات القانونية",
    color: "from-amber-500 to-amber-600",
  },
  {
    id: 2,
    icon: Target,
    title: "دقة في العمل",
    description: "نهتم بأدق التفاصيل لضمان تحقيق أفضل النتائج لعملائنا",
    color: "from-amber-600 to-yellow-600",
  },
  {
    id: 3,
    icon: Clock,
    title: "استجابة سريعة",
    description: "نقدم استشارات فورية ونتابع قضاياك على مدار الساعة",
    color: "from-amber-500 to-amber-700",
  },
  {
    id: 4,
    icon: Star,
    title: "سمعة ممتازة",
    description: "تقييمات عالية من عملائنا ونتائج مثبتة في المحاكم",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: 5,
    icon: Scale,
    title: "عدالة ونزاهة",
    description: "نلتزم بأعلى معايير الأخلاق المهنية في جميع قضايانا",
    color: "from-amber-500 to-amber-600",
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "حلول مبتكرة",
    description: "نستخدم استراتيجيات قانونية حديثة لتحقيق أفضل النتائج",
    color: "from-amber-600 to-yellow-600",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export default function FeaturesSection() {
  const reduceMotion = useReducedMotion();

  // حركة خفيفة للأشكال الكبيرة
  const floatingSlow = reduceMotion
    ? {}
    : { x: [0, 20, -10, 0], y: [0, -10, 10, 0], scale: [1, 1.05, 0.95, 1] };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-neutral-100 via-amber-50/40 to-neutral-100 mt-10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(180,83,9,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(180,83,9,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        {!reduceMotion && (
          <>
            <motion.div
              className="absolute top-1/4 -left-20 w-[28rem] lg:w-[35rem] h-[28rem] lg:h-[35rem] bg-gradient-to-br from-amber-300/20 to-amber-400/15 rounded-full blur-2xl"
              animate={floatingSlow}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-20 w-[28rem] lg:w-[35rem] h-[28rem] lg:h-[35rem] bg-gradient-to-br from-yellow-300/20 to-amber-400/15 rounded-full blur-2xl"
              animate={floatingSlow}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </>
        )}
        <div className="absolute inset-0 backdrop-blur-[20px] sm:backdrop-blur-[40px]" />
      </div>

      {/* Content */}
      <div
        dir="rtl"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full border border-amber-600/20 shadow-md mb-4"
            whileHover={{ scale: reduceMotion ? 1 : 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-amber-600 ml-2"
              animate={reduceMotion ? {} : { scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-900 text-2xl font-medium">
              لماذا تختارنا
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            نحن الخيار{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              الأمثل
            </span>{" "}
            لك
          </motion.h2>

          <motion.p
            className="text-lg text-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            أرقام وإنجازات تتحدث عن نفسها
          </motion.p>
        </motion.div>

        {/* Stats Counter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                whileHover={{ y: reduceMotion ? 0 : -5 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative group"
              >
                <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-amber-500/20 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="inline-flex p-3 bg-gradient-to-br from-amber-500/50 to-amber-600/50 rounded-xl mb-4 shadow relative z-10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      delay: index * 0.1,
                    }}
                  >
                    <AnimatedCounter
                      end={stat.value}
                      duration={stat.duration}
                      suffix={stat.suffix}
                    />
                  </motion.div>
                  <p className="text-lg font-bold text-neutral-900 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-neutral-600">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                whileHover={{ y: reduceMotion ? 0 : -5 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative group"
              >
                <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-amber-500/20 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="inline-flex p-4 bg-gradient-to-br from-amber-500/50 to-amber-600/50 rounded-xl mb-4 shadow w-fit relative">
                    {!reduceMotion && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-amber-500"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                    <Icon className="w-7 h-7 text-white relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link href="/Pages/Contact">
            <motion.button
              className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl shadow-xl flex items-center justify-center gap-3 mx-auto"
              whileHover={{
                scale: reduceMotion ? 1 : 1.05,
                boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              ابدأ معنا الآن
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: reduceMotion ? 0 : -5 }}
                transition={{ type: "spring", stiffness: 300 }}
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
      </div>
    </div>
  );
}
