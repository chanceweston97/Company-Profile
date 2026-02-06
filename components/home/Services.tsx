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

/* Web Development: code angle brackets < > */
function CodeAngleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

/* Mobile App Development: smartphone outline with dot (like screenshot) */
function MobilePhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* API Development: database */
function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
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

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

/* Performance Optimization: electricity / lightning */
function LightningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

const icons = [CodeAngleIcon, MobilePhoneIcon, CloudIcon, DatabaseIcon, ShieldIcon, LightningIcon];

function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="relative w-full">
      {/* Gradient background layer (150deg, 0.05 opacity) */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(150deg, rgba(99, 102, 241, 0.05) 0%, rgba(129, 140, 248, 0.05) 100%)",
        }}
      />
      {/* Card */}
      <div
        className="relative flex min-h-[314px] w-full flex-col rounded-xl bg-white/80 outline outline-1 -outline-offset-1 outline-white/40 backdrop-blur-[2px]"
        style={{
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.10)",
        }}
      >
        {/* Icon: 56x56, left 33px top 33px */}
        <div
          className="absolute left-[33px] top-[33px] flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl text-white"
          style={{
            background: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)",
            boxShadow: "0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
          }}
        >
          <Icon className="h-7 w-7" />
        </div>
        {/* Title: left 33px top 109px, 20px font-semibold */}
        <div className="absolute left-[33px] top-[109px] max-w-[345px]">
          <h3
            className="text-xl font-semibold text-slate-900"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif", lineHeight: "28px" }}
          >
            {title}
          </h3>
        </div>
        {/* Description: left 33px top 148px, 14px */}
        <div className="absolute left-[33px] top-[148px] max-w-[345px]">
          <p
            className="text-sm text-slate-500"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif", lineHeight: "22.75px" }}
          >
            {description}
          </p>
        </div>
        {/* Learn More: left 33px top 241px, outline only */}
        <Link
          href={href}
          className="absolute left-[33px] top-[241px] inline-flex items-center justify-center rounded-full px-[22px] py-2.5 outline outline-2 -outline-offset-2 outline-indigo-500 transition-colors hover:bg-indigo-50"
          style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
        >
          <span className="text-sm font-medium leading-5 text-indigo-500">Learn More</span>
        </Link>
      </div>
    </div>
  );
}

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
            const Icon = icons[i] ?? CodeAngleIcon;
            return (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
