import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfdfb",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
        body: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
        heading: ["Outfit", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
      // font-size
      // fontSize: {
      //   xs: "0.875rem", // 14px
      //   sm: "1rem", // 16px
      //   base: "1.125rem", // 18px
      //   lg: "1.25rem", // 20px
      //   xl: "1.5rem", // 24px
      //   "2xl": "1.875rem", // 30px
      //   "3xl": "2.25rem", // 36px
      //   "4xl": "3rem", // 48px
      //   "5xl": "3.75rem", // 60px
      //   "6xl": "4.5rem", // 72px
      // },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
            code: {
              fontFamily: "Fira Code, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace",
            },
            pre: {
              fontFamily: "Fira Code, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace",
            },
          },
        },
      },
      spacing: {
        '28': '7rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
