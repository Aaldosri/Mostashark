/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // كل الملفات داخل مجلد app
    "./components/**/*.{js,ts,jsx,tsx}", // كل الملفات داخل مجلد components
  ],
  theme: {
    extend: {
      animation: {
        morph: "morph 8s ease-in-out infinite",
        float: "float 12s ease-in-out infinite",
        gradient: "gradient 8s linear infinite",
        reveal: "reveal 1.5s cubic-bezier(0.2, 1, 0.3, 1)",
        slide: "slide 1s cubic-bezier(0.2, 1, 0.3, 1)",
        scale: "scale 1s cubic-bezier(0.2, 1, 0.3, 1)",
      },
      keyframes: {
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        reveal: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slide: {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        scale: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
