import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "./lenis-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "M14service — Professional cleaning services",
  description:
    "M14service — carpet, hard floor, upholstery, factory and high-level cleaning. Daily, deep and move-in / move-out cleans across the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white text-ink">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
