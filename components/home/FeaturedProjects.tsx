"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll, StaggerContainer } from "@/components/ui/AnimateOnScroll";

const projects = [
  {
    tag: "E-commerce Growth",
    title: "2.5x Increase in Online Sales",
    description:
      "Redesigned a legacy e-commerce platform with a modern UI, optimized checkout flow, and performance improvements, resulting in 2.5x increase in conversions and 40% higher revenue.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://placehold.co/409x192/6366f1/ffffff?text=E-Commerce",
    href: "/contact",
  },
  {
    tag: "AI & Automation",
    title: "AI-Powered Analytics Dashboard",
    description:
      "Built a real-time analytics system with AI-driven insights and automation, helping businesses process millions of events and make faster data-driven decisions while automating 80% of reporting and reducing manual work.",
    tags: ["TypeScript", "AWS", "Redis"],
    image: "https://placehold.co/409x192/6366f1/ffffff?text=Analytics",
    href: "/contact",
  },
  {
    tag: "Mobile & Fintech",
    title: "Scalable Fintech Mobile Platform",
    description:
      "Developed a secure, high-performance mobile application with real-time transactions, biometric authentication, and scalable backend infrastructure, supporting 10K+ active users with stable performance.",
    tags: ["React Native", "Firebase", "Stripe"],
    image: "https://placehold.co/409x192/6366f1/ffffff?text=Banking",
    href: "/contact",
  },
];

export function FeaturedProjects() {
  return (
    <section className="bg-white px-6 py-12 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1280px] flex flex-col gap-16">
        <AnimateOnScroll direction="up" className="flex flex-col items-center gap-4">
          <h2 className="text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Featured Projects
          </h2>
          <p className="max-w-[672px] text-center text-xl text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Real results from real projects
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid items-stretch gap-6 md:grid-cols-3" staggerDelay={0.1}>
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-white/40 bg-white/80 shadow-sm backdrop-blur-[2px] transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={409}
                  height={192}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={`${tag}-${idx}`}
                      className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500"
                      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.35px] text-slate-400" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                  {project.tag}
                </p>
                <p className="mt-2 text-sm leading-[22.75px] text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 transition-colors hover:text-indigo-600"
                  style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                >
                  View Results
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
