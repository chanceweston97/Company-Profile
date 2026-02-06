import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for scalability and performance.",
    href: "/services#web",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    href: "/services#mobile",
  },
  {
    title: "Cloud Architecture",
    description: "Scalable cloud solutions using AWS, Azure, and GCP for reliable and cost-effective infrastructure.",
    href: "/services#cloud",
  },
  {
    title: "API Development",
    description: "RESTful and GraphQL APIs designed for performance, security, and seamless integration.",
    href: "/services#api",
  },
  {
    title: "Security Consulting",
    description: "Comprehensive security audits and implementation of best practices to protect your applications.",
    href: "/services#security",
  },
  {
    title: "Performance Optimization",
    description: "Speed up your applications with expert optimization techniques and monitoring solutions.",
    href: "/services#performance",
  },
];

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function MobileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

function ApiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h10M4 17h6" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3" />
    </svg>
  );
}

const icons = [CodeIcon, MobileIcon, CloudIcon, ApiIcon, ShieldIcon, ChartIcon];

export function Services() {
  return (
    <section className="relative bg-white px-20 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent" />
      <div className="relative mx-auto max-w-[1280px] flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Services
          </h2>
          <p className="max-w-[672px] text-center text-xl text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            Comprehensive software development services tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i] ?? CodeIcon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/5 to-indigo-400/5"
              >
                <div className="relative rounded-xl border border-white/40 bg-white/80 p-8 shadow-sm backdrop-blur-[2px]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-400 text-white shadow-md">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[22.75px] text-slate-500" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex rounded-full border-2 border-indigo-500 px-5 py-2.5 text-sm font-medium text-indigo-500 transition-colors hover:bg-indigo-50"
                    style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
