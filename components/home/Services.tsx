"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const services = [
  {
    title: "Lead Generation Websites",
    description:
      "Modern, fast, and responsive websites designed to represent your brand and support your business growth.",
    href: "/contact",
  },
  {
    title: "Scalable Mobile Applications",
    description:
      "Custom mobile applications built for performance, usability, and seamless user experience.",
    href: "/contact",
  },
  {
    title: "AI & Chatbot Solutions",
    description:
      "Custom AI chatbots and smart assistants to automate customer support, capture leads, and improve user engagement.",
    href: "/contact",
  },
  {
    title: "Automation & Integrations",
    description:
      "Streamline your business with automation — from workflows to third-party integrations that save time and reduce manual work.",
    href: "/contact",
  },
];

function BotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3v4M8 13h.01M16 13h.01M8 17h8" />
    </svg>
  );
}

function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M8 6h8M7.5 7.5l3.5 8M16.5 7.5l-3.5 8" />
    </svg>
  );
}

function WebIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 20h8M12 18v2M3 9h18" />
    </svg>
  );
}

function MobileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

const icons = [WebIcon, MobileIcon, BotIcon, WorkflowIcon];

function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  highlight = false,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight?: boolean;
}) {
  return (
    <div
      className={`group relative flex h-full min-h-[460px] flex-col rounded-xl border bg-white p-8 text-center transition duration-300 hover:scale-105 hover:shadow-xl ${
        highlight ? "border-purple-400 shadow-lg shadow-purple-100/80" : "border-gray-200 shadow-sm"
      }`}
    >
      {highlight ? (
        <span className="absolute right-4 top-4 rounded-full bg-purple-500 px-2.5 py-1 text-xs font-semibold text-white">
          AI-Powered
        </span>
      ) : null}
      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3
        className="mx-auto max-w-[240px] text-2xl font-semibold leading-tight text-slate-900"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="mt-4 text-base leading-7 text-slate-600"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        {description}
      </p>
      <div className="mt-auto pt-8">
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-full border border-indigo-500 px-5 py-2.5 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
          style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
        >
          Get Started →
        </Link>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="relative bg-white px-6 py-12 md:px-20 md:py-24" aria-labelledby="home-services-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent" />
      <div className="relative mx-auto max-w-[1280px] flex flex-col gap-16">
        <AnimateOnScroll direction="up" className="flex flex-col items-center gap-4 text-center">
          <h2 id="home-services-heading" className="text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            What We Can Do For You
          </h2>
          <p className="max-w-[672px] text-center text-xl text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            We build smart, scalable solutions using AI, automation, Python backend development, .NET development services, and modern technologies.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i] ?? BotIcon;
            return (
              <AnimateOnScroll key={service.title} direction="up" delay={i * 0.08}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  icon={Icon}
                  highlight={service.title === "AI & Chatbot Solutions"}
                />
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll direction="up" className="flex flex-col items-center gap-4 text-center">
          <p className="text-2xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Ready to build something great?
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
