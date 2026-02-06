const reasons = [
  {
    title: "8 Years of Experience",
    description: "Proven track record delivering high-quality software solutions across various industries.",
  },
  {
    title: "Solid Client Base",
    description: "Trusted by startups and enterprises alike for reliable, professional service.",
  },
  {
    title: "Fast Delivery",
    description: "Efficient project execution without compromising on quality or attention to detail.",
  },
  {
    title: "Flexible Scheduling",
    description: "Work with your timeline and availability for seamless collaboration.",
  },
];

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

const icons = [ChartIcon, UsersIcon, ZapIcon, ClockIcon];

export function WhyChooseUs() {
  return (
    <section className="bg-white px-20 py-24">
      <div className="mx-auto max-w-[1280px] flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Why Choose Us
          </h2>
          <p className="max-w-[672px] text-center text-xl text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Proven expertise and commitment to excellence
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, i) => {
            const Icon = icons[i] ?? ChartIcon;
            return (
              <div key={reason.title} className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-indigo-500/5 to-indigo-400/5">
                <div className="relative flex gap-4 rounded-xl border border-white/40 bg-white/80 p-8 shadow-sm backdrop-blur-[2px]">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-400 text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[22.75px] text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
