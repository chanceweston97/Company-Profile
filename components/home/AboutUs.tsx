"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function AboutUs() {
  return (
    <section className="bg-white px-20 py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16 lg:flex-row lg:items-start">
        <AnimateOnScroll direction="right" className="flex max-w-[608px] flex-1 flex-col gap-6">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            About Us
          </h2>
          <p className="text-lg leading-[29.25px] text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            With 8 years of professional software engineering experience, we&apos;ve helped dozens of companies build and scale their digital products. From startups to enterprises, we bring technical expertise and a product-focused mindset to every project.
          </p>
          <p className="text-lg leading-[29.25px] text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Our approach combines modern development practices with proven architectural patterns to deliver solutions that are not just functional, but maintainable and scalable for the long term.
          </p>
          <Link
            href="/about"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-indigo-500 px-8 py-4 text-lg font-medium text-white shadow-md shadow-indigo-500/30 transition-colors hover:bg-indigo-600"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            Learn More About Us
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimateOnScroll>

        <AnimateOnScroll direction="left" className="relative w-full max-w-[608px] flex-shrink-0">
          <div className="overflow-hidden rounded-3xl shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <Image
              src="/images/team.png"
              alt="Our team"
              width={608}
              height={608}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 flex h-32 w-32 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-400 text-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <span className="text-3xl font-bold leading-10">8+</span>
            <span className="text-sm">Years</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
