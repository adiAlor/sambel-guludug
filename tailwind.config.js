/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brutal-dark": "#0a0a0a",
        "brutal-darker": "#050505",
        "brutal-red": "#FF2D2D",
        "brutal-red-dark": "#CC2424",
        "brutal-orange": "#FF6B35",
        "brutal-orange-dark": "#E55A2B",
        "brutal-white": "#FAFAFA",
        "brutal-gray": "#1a1a1a",
        "brutal-gray-light": "#2a2a2a",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Inter", "sans-serif"],
        brutal: ["Archivo Black", "sans-serif"],
      },
      boxShadow: {
        brutal: "8px 8px 0px 0px #FF2D2D",
        "brutal-sm": "4px 4px 0px 0px #FF2D2D",
        "brutal-lg": "12px 12px 0px 0px #FF2D2D",
        "brutal-hover": "12px 12px 0px 0px #FF2D2D",
        "brutal-orange": "8px 8px 0px 0px #FF6B35",
        "brutal-orange-sm": "4px 4px 0px 0px #FF6B35",
        "brutal-orange-lg": "12px 12px 0px 0px #FF6B35",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shake: "shake 0.5s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        fire: "fire 1s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 45, 45, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 107, 53, 0.8)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fire: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
