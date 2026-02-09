"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { HeroStats } from "./HeroStats";

/* Floating decorative dots - positions from design (1440x874) */
const dotPositions = [
  { left: "22.1%", top: "56.3%" },
  { left: "39.7%", top: "25.8%" },
  { left: "33.5%", top: "56.3%" },
  { left: "76.6%", top: "66.5%" },
  { left: "40%", top: "67.2%" },
  { left: "37%", top: "22.9%" },
  { left: "53.7%", top: "69.8%" },
  { left: "64.6%", top: "61.2%" },
];

export function Hero() {
  return (
    <section className="relative min-h-[874px] overflow-hidden bg-[linear-gradient(160deg,#EEF2FF_0%,white_50%,#FAF5FF_100%)]">
      {/* Container for floating elements (max 1440px) */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1440px]">
        {/* Blur orbs - exact positions from design */}
        <div className="absolute left-[360px] top-20 h-[500px] w-[500px] rounded-full bg-indigo-500/10 shadow-[64px_64px_64px] blur-[32px] mix-blend-multiply xl:left-[25%]" />
        <div className="absolute left-[580px] top-40 h-[500px] w-[500px] rounded-full bg-indigo-400/10 shadow-[64px_64px_64px] blur-[32px] mix-blend-multiply xl:left-[40%]" />
        <div className="absolute left-[480px] top-[294px] h-[500px] w-[500px] rounded-full bg-indigo-300/10 shadow-[64px_64px_64px] blur-[32px] mix-blend-multiply xl:left-[33%]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(90deg, #6366F1 2%, transparent 2%), linear-gradient(180deg, #6366F1 2%, transparent 2%)",
            backgroundSize: "2% 2%",
          }}
        />

        {/* Small decorative dots */}
        {dotPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-indigo-500/20"
            style={{ left: pos.left, top: pos.top }}
          />
        ))}

        {/* Left skeleton card (code brackets icon + skeleton lines) */}
        <div className="absolute left-[75px] top-[212px] hidden w-64 flex-col xl:flex" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
          <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 shadow-[40px_40px_40px] blur-[20px]" />
          <div className="relative flex w-64 flex-col gap-4 rounded-2xl border border-white/40 bg-white/90 p-6 shadow-xl backdrop-blur-[12px] outline outline-1 -outline-offset-1 outline-white/40">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-400 shadow-md">
                <Image src="/hero/cloud.svg" alt="" width={24} height={24} className="brightness-0 invert" />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="h-3 w-24 rounded-full bg-gradient-to-r from-gray-200 to-gray-100" />
                <div className="h-2 w-20 rounded-full bg-gray-100" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-2 w-full rounded-full bg-gray-100" />
              <div className="h-2 w-[171px] rounded-full bg-gray-100" />
              <div className="h-2 w-[137px] rounded-full bg-gray-100" />
            </div>
          </div>
        </div>

        {/* Right skeleton card (different icon) */}
        <div className="absolute right-[85px] top-[326px] hidden w-64 flex-col xl:flex" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
          <div className="absolute inset-0 rounded-3xl bg-indigo-400/20 shadow-[40px_40px_40px] blur-[20px]" />
          <div className="relative flex w-64 flex-col gap-4 rounded-2xl border border-white/40 bg-white/90 p-6 shadow-xl backdrop-blur-[12px] outline outline-1 -outline-offset-1 outline-white/40">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 shadow-md">
                <Image src="/hero/light.svg" alt="" width={24} height={24} className="brightness-0 invert" />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="h-3 w-24 rounded-full bg-gradient-to-r from-gray-200 to-gray-100" />
                <div className="h-2 w-20 rounded-full bg-gray-100" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-2 w-full rounded-full bg-gray-100" />
              <div className="h-2 w-[165px] rounded-full bg-gray-100" />
            </div>
          </div>
        </div>

        {/* Code snippet card (dark, syntax highlighted) */}
        <div className="absolute right-[121px] top-[88px] hidden w-56 flex-col xl:flex" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
          <div className="absolute inset-0 rounded-xl bg-indigo-400/20 shadow-[24px_24px_24px] blur-[12px]" />
          <div className="relative flex w-56 flex-col gap-3 rounded-xl border border-slate-600/50 bg-slate-900/95 p-4 shadow-xl backdrop-blur-[12px] outline outline-1 -outline-offset-1 outline-slate-600/50">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <pre className="text-xs leading-4 text-gray-300">
              <span className="text-purple-400">const </span>
              <span className="text-blue-400">build</span>
              <span className="text-purple-400"> = () =&gt; {"{"}</span>
              <br />
              <span className="ml-4">
                <span className="text-gray-400">return </span>
                <span className="text-green-400">&apos;amazing&apos;</span>
                <span className="text-gray-400">;</span>
              </span>
              <br />
              <span className="text-purple-400">{"};"}</span>
            </pre>
          </div>
        </div>

        {/* Secure & Reliable pill (left) */}
        <div className="absolute left-[216px] top-[611px] hidden xl:block" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
          <div className="absolute inset-0 rounded-full bg-indigo-500/30 shadow-[24px_24px_24px] blur-[12px]" />
          <div className="relative flex items-center gap-3 rounded-full border border-white/40 bg-white/95 px-6 py-3.5 shadow-lg backdrop-blur-[12px] outline outline-1 -outline-offset-1 outline-white/40">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-slate-900">Secure & Reliable</span>
          </div>
        </div>

        {/* Cloud Native pill (right) */}
        <div className="absolute right-[216px] top-[598px] hidden xl:block" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
          <div className="absolute inset-0 rounded-full bg-indigo-400/30 shadow-[24px_24px_24px] blur-[12px]" />
          <div className="relative flex items-center gap-3 rounded-full border border-white/40 bg-white/95 px-6 py-3.5 shadow-lg backdrop-blur-[12px] outline outline-1 -outline-offset-1 outline-white/40">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-600">
              <Image src="/hero/code.svg" alt="" width={16} height={16} className="brightness-0 invert" />
            </div>
            <span className="text-sm font-semibold text-slate-900">Cloud Native</span>
          </div>
        </div>
      </div>

      {/* Main content (centered) */}
      <div className="relative z-10 mx-auto flex max-w-[1024px] flex-col items-center px-4 pt-[7rem] pb-20 sm:px-8">
        <AnimateOnScroll direction="up" delay={0.1} duration={0.6}>
          <div className="mb-6 inline-flex items-center rounded-full bg-white/90 px-5 py-2.5 shadow-sm outline outline-1 -outline-offset-1 outline-indigo-500/10 backdrop-blur-[12px]">
            <span className="text-center font-semibold tracking-[0.35px] text-indigo-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
              PROFESSIONAL SOFTWARE SERVICES
            </span>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={0.2} duration={0.6}>
          <h1 className="text-center text-5xl font-bold leading-[72px] text-slate-900 sm:text-6xl md:text-7xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Build professional software
            <br />
            <span className="text-indigo-500">that grows with your business.</span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={0.35} duration={0.5}>
          <p className="mt-10 max-w-[768px] text-center text-xl text-slate-500 sm:text-2xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Create standout applications with expert development - it looks great and works flawlessly on any device.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={0.45} duration={0.5}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-600"
              style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
            >
              Book a Free Session
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-indigo-500 bg-white/90 px-8 py-4 text-lg font-medium text-indigo-500 backdrop-blur-[12px] transition-colors hover:bg-white"
              style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
            >
              Get Started
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={0.55} duration={0.5}>
          <HeroStats />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
