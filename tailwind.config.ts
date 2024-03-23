import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import nextuiConfig from "./nextui.config";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx,html}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00aaa1",
        "primary-light": "#dff1f0",
        fog: "#f2f8f7",
        white: "#fff",
        dark: "#333",
        darker: "#222",
        "dark-bg": "#0f172a",
        gray: "#555",
        secondary: "#999",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    nextui(nextuiConfig),
  ],
};
export default config;
