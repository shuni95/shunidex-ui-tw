module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,json}"],
  safelist: ["animate-evolution", "animate-appear"],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },

    extend: {
      boxShadow: {
        papyrus: "2px 3px 10px gray, 0 0 20px #8a4d0f inset",
      },

      animation: {
        evolution: "evolution 2s ease-in-out",
        appear: "appear 1s ease-in-out",
        preevolution: "preevolution 1s ease-in-out",
      },

      keyframes: {
        appear: {
          "0%": { transform: "scale(0.2)" },
          "50%": { transform: "scale(0.6)" },
          "100%": { transform: "scale(1)" },
        },
        preevolution: {
          "0%": { transform: "scale(1)", filter: "sepia(0.2)" },
          "50%": { transform: "scale(0.6)", filter: "sepia(0.6)" },
          "100%": { transform: "scale(0.2)", filter: "sepia(1)" },
        },
        evolution: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(1.2)" },
          "20%": { transform: "scale(0.8)" },
          "30%": { transform: "scale(1.2)" },
          "40%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.2)" },
          "60%": { transform: "scale(1.4)" },
          "70%": { transform: "scale(1)", filter: "blur(3px) grayscale(1)" },
          "80%": { transform: "scale(0.6)" },
          "90%": { transform: "scale(0.3)" },
          "100%": { transform: "scale(0.1)", filter: "blur(3px) grayscale(0)" },
        },
      },
    },
  },
  plugins: [],
};
