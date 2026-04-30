"use client";

import Link from "next/link";
import { AnimateOnScroll, StaggerContainer } from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    number: "1",
    title: "Tell Us What You Need",
    description: "Share your idea or business goals, and we’ll guide you on the best approach.",
  },
  {
    number: "2",
    title: "We Build Your Website",
    description: "We design and develop a modern website tailored to your business.",
  },
  {
    number: "3",
    title: "Launch & Grow",
    description: "Go live with confidence and start attracting more clients.",
  },
];

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H7l-4 2v-5.5A8.5 8.5 0 1 1 21 11.5z" />
    </svg>
  );
}

function BuildIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.5 6.5l3 3-8.5 8.5H6v-3l8.5-8.5z" />
      <path d="M13 8l3 3" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

const stepIcons = [ChatIcon, BuildIcon, RocketIcon];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-indigo-50/50 px-6 py-12 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1280px] flex flex-col gap-16">
        <AnimateOnScroll direction="up" className="flex flex-col items-center gap-4">
          <h2 className="text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Simple Process
          </h2>
          <p className="max-w-[672px] text-center text-xl text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            A straightforward process to get your website up and running.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8" staggerDelay={0.14}>
          {steps.map((step, i) => {
            const Icon = stepIcons[i] ?? ChatIcon;
            return (
              <div key={step.number} className="flex w-full flex-col items-center text-center transition duration-300 hover:scale-105">
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="absolute -right-6 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-sm font-bold text-white shadow">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-[22.75px] text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </StaggerContainer>

        <AnimateOnScroll direction="up" delay={0.2} className="flex flex-col items-center gap-4 text-center">
          <p className="text-2xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Ready to get started?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-7 py-3 text-base font-medium text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-600"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            Get My Free Website Audit
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
