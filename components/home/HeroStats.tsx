"use client";

const highlights = ["Clean Design", "Fast Performance", "Reliable & Scalable"];

export function HeroStats() {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {highlights.map((item) => (
        <div
          key={item}
          className="rounded-full border border-indigo-100 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-[12px] sm:text-base"
          style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
