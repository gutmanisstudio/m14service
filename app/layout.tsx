import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "./lenis-provider";
import { QuoteProvider } from "@/components/quote-modal";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "M14service — Cleaning service in Manchester",
  description:
    "M14service — clean beyond the surface. Home, office, deep, move-in/out and post-renovation cleaning in Manchester.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white text-ink">
        <LenisProvider>
          <QuoteProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
          </QuoteProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
