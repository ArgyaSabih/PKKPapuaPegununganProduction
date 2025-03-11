import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        s: "560px",
        nanggung: "880px",
        "3xl": "2100px",
      },
      keyframes: {
        "fade-down": {
          from: {
            opacity: "0",
            transform:
              "translate(var(--tw-translate-x), -1rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
          to: {
            opacity: "1",
            transform:
              "translate(var(--tw-translate-x), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
        },
        "fade-up": {
          from: {
            opacity: "1",
            transform:
              "translate(var(--tw-translate-x), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
          to: {
            opacity: "0",
            transform:
              "translate(var(--tw-translate-x), -1rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
        },
        "fade-left": {
          from: {
            transform:
              "translate(100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
          to: {
            transform:
              "translate(0, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
        },
        "curtain-up": {
          "0%": {
            clipPath: "polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)",
            opacity: "0",
          },
          "100%": {
            clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
            opacity: "1",
          },
        },
        "curtain-down": {
          "0%": {
            clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
            opacity: "1",
          },
          "100%": {
            clipPath: "polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)",
            opacity: "0",
          },
        },
      },

      animation: {
        "fade-down": "fade-down 0.2s linear",
        "fade-up": "fade-up 0.2s linear",
        "fade-left": "fade-left 0.3s linear",
        "curtain-up": "curtain-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "curtain-down": "curtain-down 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue4: "#1B3780",
        blue1: "#1A7AE3",
        white1: "#FAFAFA",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),],
} satisfies Config;
