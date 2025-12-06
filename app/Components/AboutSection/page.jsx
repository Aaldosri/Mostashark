"use client";
import AbouSection from "@/app/Components/AboutSection/page";
import React from "react";
import { useState, useEffect } from "react";
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
        <div className="absolute top-1/4 -left-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-amber-300/20 to-amber-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-yellow-300/15 to-amber-500/15 rounded-full blur-3xl animate-float [animation-delay:-6s]"></div>
      </div>
      <div
        dir="rtl"
        className="relative z-10 flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        {/* Image Section - Left */}
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            {/* Decorative Border */}
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20 border-2 border-amber-600/30">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070"
                alt="استشارات قانونية"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>

              {/* Badge on Image */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-lg px-6 py-3 rounded-xl shadow-lg border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⚖️</div>
                  <div className="text-right">
                    <p className="text-amber-600 font-bold text-lg">+15</p>
                    <p className="text-neutral-700 text-sm">سنة خبرة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section - Right */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full border border-amber-600/30 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse ml-2"></div>
            <span className="text-amber-900 text-2xl font-medium">من نحن</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            استشارات مبنية على{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                الخبرة
              </span>
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></span>
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
            <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-lg rounded-xl border border-amber-500/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl">🏆</div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">خبرة واسعة</h3>
                <p className="text-sm text-neutral-600">
                  أكثر من 15 سنة في المجال القانوني
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-lg rounded-xl border border-amber-500/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">
                  نتائج مضمونة
                </h3>
                <p className="text-sm text-neutral-600">+500 قضية ناجحة</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-lg rounded-xl border border-amber-500/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl">🔒</div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">سرية تامة</h3>
                <p className="text-sm text-neutral-600">
                  حماية كاملة لمعلومات العملاء
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-lg rounded-xl border border-amber-500/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl">⚡</div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">
                  استجابة سريعة
                </h3>
                <p className="text-sm text-neutral-600">
                  متاحون على مدار الساعة
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              اعرف المزيد عنا
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION CONTENT */}
      {/* Scroll to Top Button */}
      <div className="relative z-10 flex justify-center pb-12">
        <button
          onClick={scrollToTop}
          className="group"
          aria-label="العودة للأعلى"
        >
          {/* Background Circle with Glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-xl shadow-amber-500/30 transform group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
              {/* Arrow Icon */}
              <svg
                className="w-6 h-6 text-white transform group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
          </div>

          {/* Tooltip */}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            العودة للأعلى
          </span>
        </button>
      </div>
      {/* Animation Styles */}
    </div>
  );
}
