"use client";

import Link from "next/link";
import { AnimateOnScroll, StaggerContainer } from "@/components/ui/AnimateOnScroll";

const teamMembers = [
  {
    name: "Chance Weston",
    role: "Founder & CEO",
    description: "Leads strategy and client success, ensuring every project delivers real business results.",
  },
  {
    name: "AI Specialist",
    role: "Python AI/ML Engineer",
    description:
      "Builds intelligent systems, AI chatbots, and automation solutions to streamline operations and boost efficiency.",
  },
  {
    name: "Backend Developer",
    role: ".NET Backend Developer",
    description: "Builds scalable backend systems using .NET, Java, Python, Go, and modern cloud architectures.",
  },
  {
    name: "Full Stack Engineer",
    role: "MEARN Stack Developer",
    description:
      "Creates modern, high-converting web and mobile applications using MongoDB, Express, React, and Node.js.",
  },
];

export function AboutUs() {
  return (
    <section className="bg-white px-6 py-12 md:px-20 md:py-24" aria-labelledby="home-about-heading">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16">
        <AnimateOnScroll direction="up" className="flex flex-col items-center gap-4 text-center">
          <h2 id="home-about-heading" className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Meet the Team Behind Your Growth
          </h2>
          <p className="max-w-[780px] text-lg leading-[29.25px] text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            A focused team of experts and an AI development company in Texas delivering high-performance websites, AI solutions, and scalable systems.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {teamMembers.map((member) => (
            <div key={member.name} className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-indigo-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-[22.75px] text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                {member.description}
              </p>
            </div>
          ))}
        </StaggerContainer>

        <AnimateOnScroll direction="up" className="flex flex-col items-center gap-4 text-center">
          <p className="text-2xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Ready to work with a team that delivers results?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-8 py-4 text-lg font-medium text-white shadow-md shadow-indigo-500/30 transition-colors hover:bg-indigo-600"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            Book a Free Call
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
