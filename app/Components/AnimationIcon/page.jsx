"use client";

import {
  FileText,
  Gavel,
  Pencil,
  Scale,
  Briefcase,
  Award,
  Shield,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const ELEMENTS = [
  {
    id: 1,
    icon: Scale,
    position: { top: "15%", left: "15%" },
    animation: { duration: 5, delay: 0 },
    color: "text-amber-400",
  },
  {
    id: 2,
    icon: Gavel,
    position: { top: "15%", right: "15%" },
    animation: { duration: 6, delay: 0.5 },
    color: "text-amber-300",
  },
  {
    id: 3,
    icon: FileText,
    position: { bottom: "15%", left: "15%" },
    animation: { duration: 5.5, delay: 1 },
    color: "text-amber-500",
  },
  {
    id: 4,
    icon: Briefcase,
    position: { bottom: "15%", right: "15%" },
    animation: { duration: 6.5, delay: 1.5 },
    color: "text-amber-400",
  },
  {
    id: 5,
    icon: Award,
    position: { top: "50%", left: "10%" },
    animation: { duration: 5, delay: 2 },
    color: "text-amber-300",
  },
  {
    id: 6,
    icon: Shield,
    position: { top: "50%", right: "10%" },
    animation: { duration: 6, delay: 2.5 },
    color: "text-amber-500",
  },
];

export default function AnimationIcon() {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main Container with Hexagon Shape */}
        <motion.div
          className="relative w-[300px] sm:w-[380px] lg:w-[450px] h-[300px] sm:h-[380px] lg:h-[450px]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 animate-pulse-slow"></div>

          {/* Middle Ring */}
          <div className="absolute inset-8 rounded-full border-2 border-amber-400/20"></div>

          {/* Inner Container */}
          <motion.div
            className="absolute inset-16 rounded-full bg-gradient-to-br from-neutral-900 via-amber-950 to-neutral-900 
                       border-4 border-amber-500/40 shadow-2xl shadow-amber-500/30 overflow-hidden"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-amber-600/10"></div>

            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            ></motion.div>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Scale className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Icons */}
          {ELEMENTS.map((element) => {
            const Icon = element.icon;
            return (
              <motion.div
                key={element.id}
                className="absolute"
                style={element.position}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: element.animation.duration,
                  delay: element.animation.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 blur-xl bg-amber-500/30 rounded-full"></div>

                  {/* Icon */}
                  <Icon
                    className={`relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${element.color} 
                               drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]`}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* Orbiting Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-amber-400 rounded-full"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI * 2) / 8) * 140, 0],
                y: [0, Math.sin((i * Math.PI * 2) / 8) * 140, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.02);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
