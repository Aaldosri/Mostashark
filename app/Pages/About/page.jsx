"use client";
import AbouSection from "@/app/Components/AboutSection/page";
import React from "react";
import { useState, useEffect } from "react";
export default function About() {
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

      {/* SECTION CONTENT */}
      <AbouSection />
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
