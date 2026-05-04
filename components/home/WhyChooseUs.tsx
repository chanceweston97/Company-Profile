"use client";

import { AnimateOnScroll, StaggerContainer } from "@/components/ui/AnimateOnScroll";

const reasons = [
  {
    title: "Results-Driven Approach",
    description: "We focus on building solutions that help you get more leads, improve efficiency, and grow your business.",
  },
  {
    title: "AI & Automation Expertise",
    description: "We go beyond basic development by integrating AI and automation to give your business a competitive edge.",
  },
  {
    title: "Fast & Reliable Delivery",
    description: "We deliver high-quality work on time, without unnecessary delays or complexity.",
  },
  {
    title: "Long-Term Support",
    description: "We don’t just build and leave — we support your growth with ongoing improvements and updates.",
  },
];

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
      <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

const icons = [ChartIcon, SparklesIcon, ZapIcon, ClockIcon];

export function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-12 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1280px] flex flex-col gap-16">
        <AnimateOnScroll direction="up" className="flex flex-col items-center gap-4">
          <h2 className="text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Why Choose Us
          </h2>
          <p className="max-w-[672px] text-center text-xl text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Why businesses choose us to build their digital solutions
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid gap-8 sm:grid-cols-2" staggerDelay={0.12}>
          {reasons.map((reason, i) => {
            const Icon = icons[i] ?? ChartIcon;
            const isAiCard = reason.title === "AI & Automation Expertise";
            return (
              <div
                key={reason.title}
                className={`flex h-full min-h-0 rounded-xl border bg-white/80 backdrop-blur-[2px] transition duration-300 hover:scale-105 hover:shadow-xl ${
                  isAiCard ? "border-indigo-200 shadow-md shadow-indigo-100/70" : "border-gray-200 shadow-sm"
                }`}
              >
                <div className="flex w-full min-h-full items-start p-9">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl text-white"
                    style={{
                      background: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)",
                      boxShadow: "0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4 flex min-w-0 flex-1 flex-col gap-[6.88px] md:min-w-[370px]">
                    <h3
                      className="text-lg font-semibold text-slate-900"
                      style={{ fontFamily: "var(--font-inter), Inter, sans-serif", lineHeight: "28px" }}
                    >
                      {reason.title}
                    </h3>
                    <p
                      className="text-sm text-slate-500"
                      style={{ fontFamily: "var(--font-inter), Inter, sans-serif", lineHeight: "22.75px" }}
                    >
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
