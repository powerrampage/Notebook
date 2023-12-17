import { extendVariants, Button as NextButton } from "@nextui-org/react";

export const Button = extendVariants(NextButton, {
  variants: {
    color: {
      primary: "text-[#fff] bg-[#00AAA1]",
      secondary: "text-[#666] bg-[#fff] border border-[#999]",
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
