"use client";
import { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <NextUIProvider className="h-full flex flex-col">
          {children}
        </NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
}
