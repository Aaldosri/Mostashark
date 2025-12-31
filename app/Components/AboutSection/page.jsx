"use client";
import AbouSection from "@/app/Components/AboutSection/page";
import React from "react";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const v = window.scrollY > 300;
      setShowScrollButton((p) => (p !== v ? v : p));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const floatingSlow = reduceMotion
    ? {}
    : {
        x: [0, 30, -20, 0],
        y: [0, -20, 20, 0],
        scale: [1, 1.05, 0.95, 1],
      };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-amber-50/20 to-neutral-100">
      {/* ================= Background ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(180,83,9,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(180,83,9,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {!reduceMotion && (
          <>
            <motion.div
              className="absolute top-1/4 -left-24 w-[38rem] h-[38rem] bg-gradient-to-br from-amber-300/20 to-amber-400/15 rounded-full blur-2xl"
              animate={floatingSlow}
              transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-24 w-[38rem] h-[38rem] bg-gradient-to-br from-yellow-300/15 to-amber-500/15 rounded-full blur-2xl"
              animate={floatingSlow}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </div>

      {/* ================= Content ================= */}
      <div
        dir="rtl"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row-reverse gap-14 items-center"
      >
        {/* ================= Image ================= */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            {/* Glow Border */}
            <motion.div
              className="absolute -inset-5 bg-gradient-to-br from-amber-500/30 to-amber-600/20 rounded-[2.5rem] blur-xl"
              animate={
                reduceMotion
                  ? {}
                  : { scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }
              }
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Image Box */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-600/30"
            >
              <Image
                src="/img/MainPic0.jpg"
                alt="استشارات قانونية"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />

              {/* Badge */}
              <motion.div
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-xl shadow-xl border border-amber-500/20"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220 }}
                whileHover={{ scale: 1.1, rotate: 6 }}
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    className="text-3xl"
                    animate={reduceMotion ? {} : { rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⚖️
                  </motion.span>
                  <div>
                    <p className="text-amber-600 font-bold text-lg">+15</p>
                    <p className="text-neutral-700 text-sm">سنة خبرة</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= Text ================= */}
        <motion.div
          className="w-full lg:w-1/2 space-y-7"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="inline-flex items-center px-5 py-2.5 bg-white/80 backdrop-blur rounded-full border border-amber-600/30 shadow-lg"
          >
            <motion.span
              className="w-2.5 h-2.5 bg-amber-600 rounded-full ml-2"
              animate={reduceMotion ? {} : { scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-amber-900 text-2xl font-medium">من نحن</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            استشارات مبنية على{" "}
            <motion.span
              className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent inline-block"
              animate={
                reduceMotion
                  ? {}
                  : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              الخبرة
            </motion.span>{" "}
            والاحترافية
          </h2>

          {/* Description */}
          <p className="text-lg text-neutral-700 leading-relaxed">
            مكتب متخصص في تقديم الخدمات والاستشارات القانونية بجودة عالية مبنية
            على الخبرة والاحترافية، مع التزام كامل بحقوق العملاء.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-5 pt-4">
            {[
              ["🏆", "خبرة واسعة", "أكثر من 15 سنة"],
              ["✅", "نتائج مضمونة", "+500 قضية ناجحة"],
              ["🔒", "سرية تامة", "حماية كاملة"],
              ["⚡", "استجابة سريعة", "دعم مستمر"],
            ].map(([icon, title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -6,
                  boxShadow: "0 18px 40px rgba(251,191,36,0.25)",
                }}
                transition={{ type: "spring", stiffness: 260 }}
                className="flex gap-4 p-5 bg-white/70 backdrop-blur rounded-2xl border border-amber-500/20 shadow-sm"
              >
                <motion.span
                  whileHover={{ scale: 1.3, rotate: 12 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-3xl"
                >
                  {icon}
                </motion.span>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{title}</h3>
                  <p className="text-sm text-neutral-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/Pages/Features">
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0 22px 50px rgba(251,191,36,0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold shadow-xl"
            >
              اعرف المزيد عنا →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
