"use client";

import { useEffect, useState } from "react";

const stats = [
  { end: 8, label: "Years Experience" },
  { end: 150, label: "Projects Completed" },
  { end: 80, label: "Happy Clients" },
  { end: 15, label: "Countries Served" },
];

const DURATION_MS = 2000;

function useCountUp(end: number, durationMs: number) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // easeOutExpo: slows toward the end (animate from 1 to end)
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const current = 1 + easeProgress * (end - 1);
      setValue(progress >= 1 ? end : Math.floor(current));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, durationMs]);

  return value;
}

function AnimatedStat({ end, label }: { end: number; label: string }) {
  const value = useCountUp(end, DURATION_MS);
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="text-3xl font-bold leading-10 text-indigo-500 sm:text-4xl"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        {value}+
      </span>
      <span
        className="text-sm text-slate-500"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}

export function HeroStats() {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
      {stats.map((stat) => (
        <AnimatedStat key={stat.label} end={stat.end} label={stat.label} />
      ))}
    </div>
  );
}
