"use client";
import { extendVariants, Button as NextButton } from "@nextui-org/react";

export const Button = extendVariants(NextButton, {
  variants: {
    color: {
      primary: "text-white bg-primary",
      secondary: "text-[#666] bg-white border border-secondary",
    },
    radius: {
      lg: "rounded",
      md: "rounded",
      sm: "rounded",
    },
    size: {
      lg: "px-8",
      md: "px-7",
      sm: "px-6",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    radius: "md",
  },
});
