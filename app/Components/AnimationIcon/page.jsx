"use client";

import { FileText, Gavel, Pencil, Scale } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function AnimationIcon() {
  const ELEMENTS = [
    {
      id: 1,
      emoji: <Scale size={60} color="white" style={{ opacity: 0.2 }} />,
      top: "20%",
      left: "22%",
      dx: 5,
      dy: 5,
      rotate: [0, 5, -5, 0],
    },
    {
      id: 2,
      emoji: <Gavel size={60} color="white" style={{ opacity: 0.2 }} />,
      top: "30%",
      right: "10%",
      dx: 11,
      dy: 5,
      rotate: [0, 1, -6, 0],
    },
    {
      id: 3,
      emoji: <Pencil size={60} color="white" style={{ opacity: 0.2 }} />,
      bottom: "20%",
      left: "20%",
      dx: 2,
      dy: 15,
      rotate: [0, 2, -2, 0],
    },
    {
      id: 4,
      emoji: <FileText size={60} color="white" style={{ opacity: 0.2 }} />,
      bottom: "20%",
      left: "60%",
      dx: 7,
      dy: 9,
      rotate: [0, 2, -2, 0],
    },
  ];

  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-[280px] sm:w-[350px] lg:w-[400px] h-[280px] sm:h-[350px] lg:h-[400px] 
             rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden blob-animated"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-[inherit]"></div>

          {/* Map على العناصر */}
          <div>
            {ELEMENTS.map((el, index) => (
              <motion.div
                key={el.id}
                className="absolute"
                style={{
                  top: el.top,
                  bottom: el.bottom,
                  left: el.left,
                  right: el.right,
                }}
                initial={{ x: 0, y: 0, rotate: el.rotate[0] }}
                animate={{
                  x: [0, el.dx, -el.dx, 0],
                  y: [0, el.dy, -el.dy, 0],
                  rotate: el.rotate,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: index * 0.5, // كل عنصر يبدأ بعد نصف ثانية من اللي قبله
                }}
              >
                {el.emoji}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes morph {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
