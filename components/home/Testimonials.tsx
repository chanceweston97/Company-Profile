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

/* Quote icon variant 23: two vertical bars, indigo/30 outline */
function QuoteIcon() {
  return (
    <div className="relative h-8 w-8">
      <div
        className="absolute rounded-sm outline outline-[2.67px] -outline-offset-1.5 outline-indigo-500/30"
        style={{ width: 9.33, height: 24, left: "18.67px", top: "4px" }}
      />
      <div
        className="absolute rounded-sm outline outline-[2.67px] -outline-offset-1.5 outline-indigo-500/30"
        style={{ width: 9.33, height: 24, left: "4px", top: "4px" }}
      />
    </div>
  );
}

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
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-xl bg-white/80 shadow-sm outline outline-1 -outline-offset-1 outline-white/40 backdrop-blur-[2px] p-[33px] transition-shadow duration-300 hover:shadow-xl"
            >
              <QuoteIcon />
              <div className="flex flex-col">
                <p
                  className="text-slate-900"
                  style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "26px" }}
                >
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center pt-2">
                <div className="pr-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-white"
                    style={{
                      background: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)",
                      boxShadow: "0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
                    }}
                  >
                    <span
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: 18, lineHeight: "28px" }}
                    >
                      {t.initial}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p
                    className="font-semibold text-slate-900"
                    style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: 16, lineHeight: "19.20px" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-slate-500"
                    style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
