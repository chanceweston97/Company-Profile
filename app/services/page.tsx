import Link from "next/link";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks and best practices for scalability and performance.",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    id: "cloud-architecture",
    title: "Cloud Architecture",
    description:
      "Scalable cloud solutions using AWS, Azure, and GCP for reliable and cost-effective infrastructure.",
  },
  {
    id: "api-development",
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for performance, security, and seamless integration.",
  },
  {
    id: "security-consulting",
    title: "Security Consulting",
    description:
      "Comprehensive security audits and implementation of best practices to protect your applications.",
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Speed up your applications with expert optimization techniques and monitoring solutions.",
  },
];

function CodeAngleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function MobilePhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function LightningIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

const icons = [
  CodeAngleIcon,
  MobilePhoneIcon,
  CloudIcon,
  DatabaseIcon,
  ShieldIcon,
  LightningIcon,
];

function ServiceCard({
  id,
  title,
  description,
  icon: Icon,
}: {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div id={id} className="relative w-full scroll-mt-24">
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(150deg, rgba(99, 102, 241, 0.05) 0%, rgba(129, 140, 248, 0.05) 100%)",
        }}
      />
      <div className="relative flex min-h-[314px] w-full flex-col rounded-xl bg-white/80 shadow-sm outline outline-1 -outline-offset-1 outline-white/40 backdrop-blur-[2px] transition-shadow hover:shadow-lg">
        <div
          className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-xl text-white"
          style={{
            background: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)",
            boxShadow:
              "0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
          }}
        >
          <Icon className="h-7 w-7" />
        </div>
        <div className="absolute left-8 top-[109px] max-w-[345px]">
          <h3
            className="text-xl font-semibold text-[#0F172A]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "28px",
            }}
          >
            {title}
          </h3>
        </div>
        <div className="absolute left-8 top-[148px] max-w-[345px]">
          <p
            className="text-sm text-[#64748B]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "22.75px",
            }}
          >
            {description}
          </p>
        </div>
        <Link
          href={`/services#${id}`}
          className="absolute left-8 top-[218px] inline-flex items-center justify-center rounded-full border-2 border-[#6366F1] px-[22px] py-2.5 text-sm font-medium text-[#6366F1] transition-colors hover:bg-indigo-50"
          style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-2"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main
      className="relative min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), white",
      }}
    >
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-20"
        style={{
          paddingLeft: "clamp(1.5rem, 5vw, 272px)",
          paddingRight: "clamp(1.5rem, 5vw, 272px)",
          paddingTop: "96px",
          paddingBottom: "48px",
          background:
            "linear-gradient(171deg, #EEF2FF 0%, white 50%, #FAF5FF 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            background:
              "linear-gradient(90deg, #6366F1 2%, rgba(99, 102, 241, 0) 2%), linear-gradient(180deg, #6366F1 2%, rgba(99, 102, 241, 0) 2%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex w-full max-w-[896px] flex-col items-center">
          <div
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 shadow-sm backdrop-blur-xl"
            style={{
              background: "rgba(255, 255, 255, 0.90)",
              boxShadow:
                "0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
              outline: "1px solid rgba(99, 102, 241, 0.10)",
              outlineOffset: "-1px",
            }}
          >
            <span
              className="text-center text-sm font-semibold tracking-[0.35px] text-[#6366F1]"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                lineHeight: "20px",
              }}
            >
              OUR SERVICES
            </span>
          </div>
          <h1
            className="mt-[62px] text-center text-5xl font-bold leading-[60px] md:text-[60px]"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            <span className="text-[#0F172A]">Comprehensive Software</span>
            <br />
            <span className="text-[#6366F1]">Development Services</span>
          </h1>
          <p
            className="mt-9 max-w-[768px] text-center text-xl font-normal text-[#64748B]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "32.5px",
            }}
          >
            From concept to deployment, we deliver solutions designed to help
            your
            <br />
            business grow and succeed in the digital world.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium text-white"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "28px",
              background: "#6366F1",
              boxShadow:
                "0px 8px 10px -6px rgba(99, 102, 241, 0.20), 0px 20px 25px -5px rgba(99, 102, 241, 0.20)",
            }}
          >
            Book a Consultation
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative bg-white px-8 pt-12 pb-24 md:px-20 md:pt-16">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(238,242,255,0.30)] to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i] ?? CodeAngleIcon;
            return (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={Icon}
              />
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative px-8 py-24 md:px-20"
        style={{
          background:
            "linear-gradient(176deg, #EEF2FF 0%, #FAF5FF 100%)",
        }}
      >
        <div className="relative mx-auto flex max-w-[896px] flex-col items-center gap-6 text-center">
          <h2
            className="text-3xl font-bold leading-10 text-[#0F172A] md:text-4xl"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "40px",
            }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            className="max-w-[768px] text-xl font-normal text-[#64748B]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "32.5px",
            }}
          >
            Let&apos;s discuss how we can help bring your ideas to life with
            expert software development.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#6366F1] px-8 py-4 text-lg font-medium text-white shadow-lg shadow-indigo-500/30 transition-opacity hover:opacity-95"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                lineHeight: "28px",
              }}
            >
              Book a Session
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#6366F1] bg-white/90 px-8 py-4 text-lg font-medium text-[#6366F1] backdrop-blur-xl transition-opacity hover:opacity-95"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                lineHeight: "28px",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
