const steps = [
  {
    number: "1",
    title: "Book a Consultation",
    description: "Schedule a free consultation to discuss your project requirements and goals.",
  },
  {
    number: "2",
    title: "Define Scope",
    description: "We collaborate to create a detailed project plan with clear milestones and deliverables.",
  },
  {
    number: "3",
    title: "Development",
    description: "Agile development process with regular updates and feedback loops.",
  },
  {
    number: "4",
    title: "Delivery & Support",
    description: "Launch your project with ongoing support and maintenance as needed.",
  },
];

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  );
}

function CodeBracketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
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

const stepIcons = [CalendarIcon, ClipboardIcon, CodeBracketIcon, RocketIcon];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-indigo-50/50 px-20 py-24">
      <div className="mx-auto max-w-[1280px] flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            How It Works
          </h2>
          <p className="max-w-[672px] text-center text-xl text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            A simple, transparent process from start to finish
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = stepIcons[i] ?? CalendarIcon;
            return (
              <div key={step.number} className="flex w-full max-w-[296px] flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-md transition-shadow duration-300 hover:shadow-xl">
                    <Icon className="h-8 w-8" />
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
        </div>
      </div>
    </section>
  );
}
