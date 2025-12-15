"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Briefcase,
  Shield,
  Users,
  Building,
} from "lucide-react";
import Link from "next/link";

// Services Data
const SERVICES = [
  {
    id: 1,
    icon: Scale,
    title: "القضايا الجنائية",
    description:
      "تمثيل قانوني متخصص في القضايا الجنائية بجميع أنواعها مع ضمان أفضل النتائج والدفاع القوي عن حقوقك",
    features: ["دفاع جنائي", "استئناف", "استشارات قانونية", "تحقيقات"],
    gradient: "from-amber-400 to-amber-600",
  },
  {
    id: 2,
    icon: FileText,
    title: "القضايا المدنية",
    description:
      "حلول قانونية شاملة للنزاعات المدنية والتجارية مع خبرة واسعة في المحاكم وتحقيق أفضل النتائج",
    features: ["صياغة عقود", "نزاعات مدنية", "تحكيم ووساطة", "تنفيذ أحكام"],
    gradient: "from-amber-500 to-amber-700",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "الاستشارات القانونية",
    description:
      "استشارات قانونية احترافية للأفراد والشركات في مختلف المجالات القانونية بسرية تامة",
    features: ["استشارات فورية", "مراجعة عقود", "حلول وقائية", "دراسة قانونية"],
    gradient: "from-amber-400 to-amber-600",
  },
  {
    id: 4,
    icon: Shield,
    title: "قضايا الأسرة",
    description:
      "معالجة قضايا الأحوال الشخصية بسرية تامة واحترافية عالية مع مراعاة الجوانب الإنسانية",
    features: ["طلاق وخلع", "حضانة ورؤية", "نفقة", "إثبات نسب"],
    gradient: "from-amber-500 to-amber-700",
  },
  {
    id: 5,
    icon: Users,
    title: "القضايا العمالية",
    description:
      "حماية حقوق العمال وأصحاب العمل في النزاعات العمالية وتقديم الحلول القانونية المناسبة",
    features: ["نزاعات عمالية", "تعويضات", "عقود عمل", "فصل تعسفي"],
    gradient: "from-amber-400 to-amber-600",
  },
  {
    id: 6,
    icon: Building,
    title: "القضايا التجارية",
    description:
      "خدمات قانونية متكاملة للشركات والمؤسسات التجارية مع حلول مبتكرة لنمو أعمالك",
    features: ["تأسيس شركات", "عقود تجارية", "إفلاس وتصفية", "ملكية فكرية"],
    gradient: "from-amber-500 to-amber-700",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
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

export default function ServicesSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-amber-50/30 to-neutral-50 mt-10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(180,83,9,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(180,83,9,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Animated Shapes */}
        <motion.div
          className="absolute top-1/4 -left-20 w-[30rem] lg:w-[40rem] h-[30rem] lg:h-[40rem] bg-gradient-to-br from-amber-300/30 to-amber-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-20 w-[30rem] lg:w-[40rem] h-[30rem] lg:h-[40rem] bg-gradient-to-br from-yellow-300/25 to-amber-400/20 rounded-full blur-3xl"
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

        {/* Glass Layer */}
        <div className="absolute inset-0 backdrop-blur-[50px] sm:backdrop-blur-[100px]"></div>
      </div>

      {/* Content */}
      <div
        dir="rtl"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full border border-amber-600/30 shadow-lg mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-amber-600 ml-2"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-900 text-2xl font-medium">
              خدماتنا القانونية
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            نقدم لك أفضل{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              الخدمات القانونية
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            نوفر لك حلولاً قانونية شاملة بخبرة تمتد لأكثر من 15 عاماً
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="relative group"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Card */}
                <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl p-6 border-2 border-amber-500/20 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Icon with Animation */}
                  <motion.div
                    className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl mb-4 shadow-lg w-fit`}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-700 mb-4 leading-relaxed flex-grow text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-amber-500/20">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-amber-500"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-sm text-neutral-600">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.button
                    className="mt-4 text-amber-600 font-medium text-sm flex items-center gap-1"
                    whileHover={{ gap: "0.5rem" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    اعرف المزيد
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: -3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href="/Pages/Contact">
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                احجز استشارة مجانية
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
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
    </div>
  );
}
