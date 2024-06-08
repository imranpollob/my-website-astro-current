import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Atkinson", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: "0.875rem", // 14px
        sm: "1rem", // 16px
        base: "1.125rem", // 18px
        lg: "1.25rem", // 20px
        xl: "1.5rem", // 24px
        "2xl": "1.875rem", // 30px
        "3xl": "2.25rem", // 36px
        "4xl": "3rem", // 48px
        "5xl": "3.75rem", // 60px
        "6xl": "4.5rem", // 72px
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
          },
        },
      },
      spacing: {
        '28': '7rem',
      },
      rotate: {
        45: "45deg",
        135: "135deg",
        225: "225deg",
        315: "315deg",
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out forwards",
        meteor: "meteor 3s ease-in-out forwards",
      },
      keyframes: {
        twinkle: {
          "0%": {
            opacity: 0,
            transform: "rotate(0deg)",
          },
          "50%": {
            opacity: 1,
            transform: "rotate(180deg)",
          },
          "100%": {
            opacity: 0,
            transform: "rotate(360deg)",
          },
        },
        meteor: {
          "0%": {
            opacity: 0,
            transform: "translateY(200%)",
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
