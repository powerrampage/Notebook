import type { Config } from "tailwindcss";
import { nextui, ConfigTheme } from "@nextui-org/react";

const configTheme: ConfigTheme = {
  colors: {
    primary: {
      DEFAULT: "#00AAA1",
      foreground: "#ffffff",
    },
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00aaa1",
        secondary: "#999",
        dark: "#333",
        "primary-light": "#dff1f0",
        "dark-bg": "#0f172a",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "notebook",
      defaultTheme: "light",
      layout: {
        radius: {
          large: "5px",
          medium: "5px",
          small: "5px",
        },
      },
      themes: {
        light: configTheme,
        dark: {
          ...configTheme,
          colors: {
            background: "#0F172A",
          },
        },
      },
    }),
  ],
};
export default config;
