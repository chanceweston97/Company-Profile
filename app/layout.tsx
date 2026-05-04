import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Westons Tech Solutions | Texas AI & Backend Development Company (Python, .NET)",
  description:
    "We help US businesses generate leads, automate operations, and scale with AI, custom software, and high-performance websites. Serving Texas, Dallas, Houston.",
  keywords: [
    "AI automation USA",
    "software development Texas",
    "web development company USA",
    "AI chatbot business",
    "backend development services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} flex min-h-screen flex-col antialiased`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
