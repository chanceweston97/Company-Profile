const testimonials = [
  {
    quote:
      '"Outstanding work! The project was delivered on time and exceeded our expectations. Highly recommended for any software development needs."',
    name: "Sarah Johnson",
    role: "CTO at TechStart Inc",
    initial: "S",
  },
  {
    quote:
      '"Professional, efficient, and incredibly skilled. Our application performance improved by 300% after the optimization work."',
    name: "Michael Chen",
    role: "Product Manager at DataFlow Systems",
    initial: "M",
  },
  {
    quote:
      '"The best developer we have worked with. Clear communication, expert technical skills, and a genuine commitment to our success."',
    name: "Emily Rodriguez",
    role: "Founder at CloudVentures",
    initial: "E",
  },
];

export function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-50/50 px-20 py-24">
      <div className="mx-auto max-w-[1280px] flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Client Testimonials
          </h2>
          <p className="max-w-[672px] text-center text-xl text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            What clients say about working with us
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/5 to-indigo-400/5">
              <div className="relative flex flex-1 flex-col gap-4 rounded-xl border border-white/40 bg-white/80 p-8 shadow-sm backdrop-blur-[2px]">
                {/* Quote marks */}
                <div className="flex gap-1 text-indigo-500/30">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.998 3.638-3.998 5.849h3.983v10h-9.981z" />
                  </svg>
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.998 3.638-3.998 5.849h3.983v10h-9.981z" />
                  </svg>
                </div>
                <p className="text-base leading-[26px] text-slate-900" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                  {t.quote}
                </p>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-400 text-lg font-semibold text-white shadow-md">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                      {t.name}
                    </p>
                    <p className="text-sm text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
