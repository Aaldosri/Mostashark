"use client";

import Image from "next/image";
import React from "react";
import { Scale } from "lucide-react";
import dynamic from "next/dynamic";

const AnimationIcon = dynamic(
  () => import("../../Components/AnimationIcon/page"),
  { ssr: false } // يمنع محاولة عرض الـ Client Component على السيرفر
);

export default function MainPage() {
  return (
    <div
      dir="rtl"
      className="bg-gradient-to-b from-neutral-50 via-amber-50/30 to-neutral-50 overflow-x-hidden"
    >
      {/* Modern Hero Section */}
      <div className="relative overflow-hidden flex items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Elegant Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(180,83,9,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(180,83,9,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

          {/* Animated Shapes */}
          <div className="absolute top-1/4 -left-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-amber-300/30 to-amber-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 -right-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-yellow-300/25 to-amber-400/20 rounded-full blur-3xl animate-float [animation-delay:-6s]"></div>

          {/* Glass Layer */}
          <div className="absolute inset-0 backdrop-blur-[50px] sm:backdrop-blur-[100px]"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(180,83,9,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(180,83,9,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Content Container */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
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
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-reveal [animation-delay:0.8s]">
                <button className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg group-hover:opacity-60 transition-opacity duration-500"></div>
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

                <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-amber-600/40 bg-white/60 backdrop-blur-lg text-amber-900 hover:bg-white/80 hover:text-neutral-900 transition-all min-w-[160px]">
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
