import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Noto_Sans } from "next/font/google";
import { Providers } from "./providers";
import { Footer, Header } from "@/components";

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoteBook",
  description: "Notebook is a place where you can find your perfect blogs",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={notoSans.className}>
        <Providers>
          <Header />
          <main className="flex-auto bg-fog">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
