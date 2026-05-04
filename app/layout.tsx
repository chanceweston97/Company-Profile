import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Westons Tech Solutions",
  url: "https://www.westonstechsolutions.com",
  description:
    "Texas-based AI and backend development company specializing in Python and .NET",
  areaServed: "US",
  sameAs: [],
};

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
    "Texas-based AI & backend development company. We build scalable platforms, AI automation, and custom software using Python and .NET. Book a free consultation today.",
  keywords: [
    "AI automation USA",
    "software development Texas",
    "web development company USA",
    "AI chatbot business",
    "backend development services",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} flex min-h-screen flex-col antialiased`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
