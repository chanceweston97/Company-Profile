import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "150+", label: "Projects Completed" },
  { value: "80+", label: "Happy Clients" },
  { value: "15+", label: "Countries Served" },
];

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every line of code and every client interaction.",
    icon: "excellence",
  },
  {
    title: "Client-Focused",
    description:
      "Your success is our success. We work closely with you to achieve your goals.",
    icon: "client",
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of the curve with the latest technologies and best practices.",
    icon: "innovation",
  },
  {
    title: "Passion",
    description:
      "We love what we do and it shows in the quality of our work.",
    icon: "passion",
  },
  {
    title: "Quality Code",
    description:
      "Clean, maintainable, and scalable code is our standard, not an exception.",
    icon: "quality",
  },
  {
    title: "Global Reach",
    description:
      "We work with clients worldwide, bringing diverse perspectives to every project.",
    icon: "global",
  },
];

const journey = [
  {
    year: "2016",
    title: "The Beginning",
    description:
      "Started as a solo freelancer, building websites and applications for local businesses. Focused on delivering quality work and building lasting relationships.",
  },
  {
    year: "2019",
    title: "Expansion",
    description:
      "Expanded services to include mobile app development and cloud architecture. Started working with international clients and larger projects.",
  },
  {
    year: "2024",
    title: "Today",
    description:
      "Now serving clients across 15+ countries with a full suite of software development services. Continuing to innovate and deliver exceptional results.",
  },
];

function ValueIcon({ name }: { name: string }) {
  const iconClass = "h-7 w-7";
  switch (name) {
    case "excellence":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8" />
        </svg>
      );
    case "client":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "innovation":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      );
    case "passion":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "quality":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "global":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    default:
      return null;
  }
}

function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const cardShadow =
  "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 1px 3px rgba(0, 0, 0, 0.10), 0px 1px 2px rgba(0, 0, 0, 0.06)";
const iconGradient = "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)";
const iconShadow =
  "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -4px rgba(0, 0, 0, 0.10)";

export default function AboutPage() {
  return (
    <main
      className="relative flex min-h-screen flex-col"
      style={{ background: "linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), white" }}
    >
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-20"
        style={{
          paddingLeft: "clamp(1rem, 5vw, 80px)",
          paddingRight: "clamp(1rem, 5vw, 80px)",
          paddingTop: "96px",
          paddingBottom: "96px",
          minHeight: "800px",
          background: "linear-gradient(171deg, #EEF2FF 0%, white 50%, #FAF5FF 100%)",
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
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex max-w-[608px] flex-col">
            <div
              className="inline-flex w-fit items-center justify-center rounded-full px-[34px] py-2.5 shadow-sm backdrop-blur-xl"
              style={{
                background: "rgba(255, 255, 255, 0.90)",
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -4px rgba(0, 0, 0, 0.10)",
              }}
            >
              <span
                className="text-[11.9px] font-semibold leading-5 text-[#6366F1]"
                style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
              >
                ABOUT US
              </span>
            </div>
            <h1
              className="mt-8 text-4xl font-bold leading-[60px] text-[#0F172A] md:text-[51px]"
              style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
            >
              Building Excellence
              <br />
              <span className="text-black">Since 2016</span>
            </h1>
            <p
              className="mt-8 text-[17px] font-normal leading-8 text-[#64748B]"
              style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
            >
              With 8 years of professional software engineering experience, we&apos;ve
              helped dozens of companies build and scale their digital products.
            </p>
            <p
              className="mt-6 text-[15.3px] font-normal leading-[29px] text-[#64748B]"
              style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
            >
              Our approach combines technical expertise with a deep understanding of
              business needs, ensuring that every solution we deliver drives real value.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-[#6366F1] px-8 py-4 text-[15.3px] font-medium text-white transition-opacity hover:opacity-95"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                lineHeight: "28px",
                boxShadow:
                  "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 20px 25px -5px rgba(99, 102, 241, 0.20), 0px 8px 10px -6px rgba(99, 102, 241, 0.20)",
              }}
            >
              Work With Us
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="relative shrink-0 lg:ml-auto">
            <div
              className="absolute -inset-8 rounded-3xl opacity-30"
              style={{ background: iconGradient, filter: "blur(32px)" }}
              aria-hidden
            />
            <div
              className="relative overflow-hidden rounded-3xl shadow-xl"
              style={{
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
                width: "min(100%, 608px)",
                aspectRatio: "1",
              }}
            >
              <Image
                src="/images/consult.png"
                alt="Team or consultation"
                width={608}
                height={608}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 flex h-28 w-28 flex-col items-center justify-center rounded-2xl text-white sm:h-32 sm:w-32"
              style={{
                background: iconGradient,
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span
                className="text-[30.6px] font-bold leading-10"
                style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
              >
                8+
              </span>
              <span
                className="text-[11.9px] font-normal leading-5"
                style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
              >
                Years
              </span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="relative mx-auto mt-16 flex max-w-[768px] flex-wrap items-center justify-center gap-8"
          style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-4xl font-bold leading-10 text-[#6366F1]">
                {stat.value}
              </span>
              <span className="text-sm font-normal leading-5 text-[#64748B]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section
        className="px-8 py-24 md:px-20"
        style={{
          background: "linear-gradient(180deg, white 0%, #EEF2FF 100%)",
        }}
      >
        <div className="mx-auto max-w-[1280px]">
          <h2
            className="text-center text-4xl font-bold leading-[48px] text-[#0F172A] md:text-[40.8px]"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            Our Values
          </h2>
          <p
            className="mx-auto mt-4 max-w-[672px] text-center text-[17px] font-normal leading-7 text-[#64748B]"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            The principles that guide everything we do
          </p>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="relative">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: iconGradient }}
                />
                <div
                  className="relative flex flex-col rounded-xl bg-white p-8"
                  style={{ boxShadow: cardShadow, minHeight: "227px" }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-white"
                    style={{ background: iconGradient, boxShadow: iconShadow }}
                  >
                    <ValueIcon name={item.icon} />
                  </div>
                  <h3
                    className="mt-6 text-[17px] font-semibold leading-7 text-[#0F172A]"
                    style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-[11.9px] font-normal leading-[22px] text-[#64748B]"
                    style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-white px-8 py-24 md:px-20">
        <div className="mx-auto max-w-[896px]">
          <h2
            className="text-center text-4xl font-bold leading-[48px] text-[#0F172A] md:text-[40.8px]"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            Our Journey
          </h2>
          <div className="mt-16 space-y-8">
            {journey.map((item) => (
              <div key={item.year} className="relative">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: iconGradient }}
                />
                <div
                  className="relative flex gap-6 rounded-xl bg-white p-8"
                  style={{ boxShadow: cardShadow }}
                >
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-white"
                    style={{ background: iconGradient, boxShadow: iconShadow }}
                  >
                    <span
                      className="text-[20.4px] font-bold leading-8"
                      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3
                      className="text-[20.4px] font-bold leading-8 text-[#0F172A]"
                      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-3 text-[15.3px] font-normal leading-[29px] text-[#64748B]"
                      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative px-8 py-24 md:px-20"
        style={{
          background: "linear-gradient(176deg, #EEF2FF 0%, #FAF5FF 100%)",
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
            Let&apos;s discuss how we can help bring your ideas to life with expert
            software development.
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
