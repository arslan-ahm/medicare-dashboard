// import { COLORS } from "@/constants/colors";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0000ac",
        md_gray: "#828282",
        light_gray: "#e0e0e0",
        red: "#eb5757",
        md_varient_red: "#ffc5c5",
        light_varient_red: "#fbdddd",
        green: "#27ae60",
        md_varient_green: "#d8ffe8",
        light_varient_green: "#d4efdf",
        blue: "#2f80ed",
        md_varient_blue: "#c6defe",
        light_varient_blue: "#d5e6fb",
        yellow: "#eacb68",
        md_varient_yellow: "#fff3cd",
        light_varient_yellow: "#f9f1d8",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
