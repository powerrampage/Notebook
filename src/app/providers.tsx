"use client";
import { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <NextUIProvider className="h-full flex flex-col">
        {children}
      </NextUIProvider>
    </NextThemesProvider>
  );
}
