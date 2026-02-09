"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-indigo-400 px-6 py-12 md:px-20 md:py-24">
      {/* Decorative blur orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-[25%] top-0 h-96 w-96 rounded-full bg-white shadow-2xl blur-[32px]" />
        <div className="absolute left-[48%] top-4 h-96 w-96 rounded-full bg-white shadow-2xl blur-[32px]" />
      </div>

      <div className="relative mx-auto flex max-w-[896px] flex-col items-center gap-6 text-center">
        <AnimateOnScroll direction="up">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Ready to Get Started?
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={0.1}>
          <p className="text-xl leading-[32.5px] text-white/90" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Let&apos;s discuss your project and bring your ideas to life
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={0.2}>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-800 px-8 py-4 text-lg font-medium text-white shadow-lg transition-colors hover:bg-slate-700"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            Book a Free Consultation
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-indigo-500 bg-white px-8 py-4 text-lg font-medium text-indigo-500 shadow-lg transition-colors hover:bg-white/95"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            Contact Us
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
