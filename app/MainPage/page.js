"use client";

import Image from "next/image";
import React from "react";
import { Scale } from "lucide-react";
import dynamic from "next/dynamic";

const AnimationIcon = dynamic(
  () => import("../Components/AnimationIcon/page"),
  { ssr: false } // يمنع محاولة عرض الـ Client Component على السيرفر
);
export default function MainPage() {
  return (
    <div dir="rtl" className="bg-[#0A0A0A] overflow-x-hidden">
      {/* Modern Hero Section */}
      <div className="relative  overflow-hidden flex items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20 opacity-50"></div>

          {/* Animated Shapes */}
          <div className="absolute top-1/4 -left-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 -right-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl animate-float [animation-delay:-6s]"></div>

          {/* Glass Layer */}
          <div className="absolute inset-0 backdrop-blur-[50px] sm:backdrop-blur-[100px]"></div>
        </div>

        {/* Content Container */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="animate-reveal [animation-delay:0.2s] flex justify-center lg:justify-start">
                <div className="inline-flex items-center px-3 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-lg transform hover:scale-105 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse"></div>
                  <span className="ml-2 text-xs sm:text-sm text-white/70 tracking-wider">
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
                  <span className="inline-block bg-gradient-to-r from-violet-300 via-cyan-300 to-violet-300 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                    مستشارك
                  </span>
                  <span className="block  mt-2 text-white">
                    للاستشارات القانونية
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-base text-right sm:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 animate-reveal [animation-delay:0.6s]">
                نقدم استشارات قانونية موثوقة وسريعة لتلبية احتياجاتك القانونية
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-reveal [animation-delay:0.8s]">
                <button className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg blur-lg group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <span className="text-white font-medium">تواصل معنا</span>
                    <svg
                      className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </button>

                <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg text-white/70 hover:bg-white/10 hover:text-white transition-all min-w-[160px]">
                  تعرف على خدماتنا
                </button>
              </div>
            </div>

            <AnimationIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
