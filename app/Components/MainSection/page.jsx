"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Scale } from "lucide-react";
import dynamic from "next/dynamic";
import IntroMain from "@/app/Components/IntroMain/page";

const AnimationIcon = dynamic(
  () => import("../../Components/AnimationIcon/page"),
  { ssr: false } // يمنع محاولة عرض الـ Client Component على السيرفر
);

export default function MainSection() {
  const [ready, setReady] = useState(false);

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
        {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(180,83,9,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(180,83,9,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div> */}

        {/* Content Container */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}

            <IntroMain />

            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
              {!ready && (
                <div className="absolute inset-0 bg-amber-100/40 animate-pulse rounded-xl" />
              )}

              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  ready ? "opacity-100" : "opacity-0"
                }`}
              >
                <AnimationIcon onReady={() => setReady(true)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
