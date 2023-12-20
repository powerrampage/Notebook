import { ConfigTheme, NextUIPluginConfig } from "@nextui-org/react";

const configTheme: ConfigTheme = {
  colors: {
    primary: {
      DEFAULT: "#00AAA1",
      foreground: "#ffffff",
    },
  },
};

export default {
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
} satisfies NextUIPluginConfig;
