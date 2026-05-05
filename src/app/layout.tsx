import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "M14service — Cleaning services",
  description:
    "M14service — carpet, hard floor, upholstery and high level cleaning. Daily, deep and move-in / move-out cleans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-paper antialiased">
        <SmoothScroll />
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
