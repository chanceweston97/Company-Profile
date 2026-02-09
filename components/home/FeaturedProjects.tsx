"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll, StaggerContainer } from "@/components/ui/AnimateOnScroll";

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description: "Complete overhaul of a legacy e-commerce system, resulting in 250% increase in conversion rates.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://placehold.co/409x192/6366f1/ffffff?text=E-Commerce",
    href: "/portfolio#ecommerce",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Built a scalable analytics platform processing millions of events per day with sub-second latency.",
    tags: ["TypeScript", "AWS", "Redis"],
    image: "https://placehold.co/409x192/6366f1/ffffff?text=Analytics",
    href: "/portfolio#analytics",
  },
  {
    title: "Mobile Banking Application",
    description: "Secure, user-friendly mobile banking app with biometric authentication and real-time transactions.",
    tags: ["React Native", "Firebase", "Stripe"],
    image: "https://placehold.co/409x192/6366f1/ffffff?text=Banking",
    href: "/portfolio#banking",
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

        <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
          {projects.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-xl border border-white/40 bg-white/80 shadow-sm backdrop-blur-[2px] transition-shadow duration-300 hover:shadow-xl">
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
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
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
                <p className="mt-2 text-sm leading-[22.75px] text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-indigo-500 px-5 py-2.5 text-sm font-medium text-indigo-500 transition-colors hover:bg-indigo-50"
                  style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                >
                  View Case Study
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
