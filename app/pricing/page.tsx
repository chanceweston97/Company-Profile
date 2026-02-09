"use client";

import Link from "next/link";
import { useState } from "react";

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

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const faqItems = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we can arrange custom payment terms.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes! You can upgrade to a higher tier at any time. We'll credit any unused portion of your current plan toward the upgrade.",
  },
  {
    question: "What happens after the support period ends?",
    answer:
      "After the included support period, you can purchase extended support packages or opt for a monthly maintenance plan.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a satisfaction guarantee. If you're not happy with the initial deliverables, we'll work with you to make it right or provide a refund.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto w-full max-w-[896px] space-y-4">
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl bg-white shadow-sm"
            style={{
              boxShadow:
                "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 1px 3px rgba(0, 0, 0, 0.10), 0px 1px 2px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div
              className="absolute inset-0 rounded-xl"
            />
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
              >
                <span
                  className="text-[15.3px] font-semibold leading-7 text-[#0F172A]"
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                  }}
                >
                  {item.question}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  isOpen ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p
                  className="px-6 pb-6 pt-0 text-[13.6px] font-normal leading-[26px] text-[#64748B]"
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const starterFeatures = [
  "Up to 3 pages/screens",
  "Responsive design",
  "Basic SEO optimization",
  "2 rounds of revisions",
  "30 days of support",
  "Source code included",
];

const professionalFeatures = [
  "Up to 10 pages/screens",
  "Advanced responsive design",
  "Full SEO optimization",
  "API integration",
  "4 rounds of revisions",
  "60 days of support",
  "Source code included",
  "Performance optimization",
];

const enterpriseFeatures = [
  "Unlimited pages/screens",
  "Custom architecture",
  "Advanced integrations",
  "Dedicated support",
  "Unlimited revisions",
  "90+ days of support",
  "Source code included",
  "Performance optimization",
  "Security audit",
  "Cloud deployment",
];

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
        style={{
          background: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)",
        }}
      >
        <CheckIcon />
      </div>
      <span
        className="text-[11.9px] font-normal leading-5 text-[#64748B]"
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
        }}
      >
        {text}
      </span>
    </div>
  );
}

function PricingCard({
  title,
  subtitle,
  price,
  priceLabel,
  features,
  ctaLabel,
  ctaHref,
  variant,
  badge,
}: {
  title: string;
  subtitle: string;
  price: string;
  priceLabel: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  variant: "outline" | "solid";
  badge?: string;
}) {
  return (
    <div className="relative flex h-full w-full flex-col">
      <div
        className={`relative flex h-full min-h-0 flex-col rounded-[12px] bg-white p-8 ${badge ? "pt-12" : ""}`}
        style={{
          boxShadow:
            variant === "solid"
              ? "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 8px 10px -6px rgba(0, 0, 0, 0.10)"
              : "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 1px 3px rgba(0, 0, 0, 0.10), 0px 1px 2px rgba(0, 0, 0, 0.06)",
        }}
      >
        {badge && (
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1 px-6 py-2 text-center text-[11.9px] font-semibold leading-5 text-white"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              background: "linear-gradient(90deg, #6366F1 0%, #818CF8 100%)",
              boxShadow:
                "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -4px rgba(0, 0, 0, 0.10)",
              borderRadius: "9999px",
            }}
          >
            {badge}
          </div>
        )}
        <div className="mb-6 text-center">
          <h3
            className="text-[20.4px] font-bold leading-8 text-[#0F172A]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            {title}
          </h3>
          <p
            className="mt-2 text-[11.9px] font-normal leading-5 text-[#64748B]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            {subtitle}
          </p>
          <p
            className="mt-4 text-[40.8px] font-bold leading-[48px] text-[#0F172A]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            {price}
          </p>
          <p
            className="text-[11.9px] font-normal leading-5 text-[#64748B]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            {priceLabel}
          </p>
        </div>
        <ul className="mb-8 flex-1 space-y-4">
          {features.map((f) => (
            <li key={f}>
              <FeatureItem text={f} />
            </li>
          ))}
        </ul>
        <Link
          href={ctaHref}
          className={`inline-flex w-full items-center justify-center rounded-full py-4 text-[15.3px] font-medium transition-opacity hover:opacity-95 ${
            variant === "solid"
              ? "bg-[#6366F1] text-white shadow-lg shadow-indigo-500/30"
              : "border border-[#6366F1] bg-transparent text-[#6366F1]"
          }`}
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            lineHeight: "28px",
          }}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main
      className="relative flex min-h-screen flex-col"
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
              PRICING PLANS
            </span>
          </div>
          <h1
            className="mt-[62px] text-center text-5xl font-bold leading-[60px] md:text-[60px]"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            <span className="text-[#0F172A]">Simple, Transparent</span>
            <br />
            <span className="text-[#6366F1]">Pricing</span>
          </h1>
          <p
            className="mt-9 max-w-[768px] text-center text-xl font-normal text-[#64748B]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "32.5px",
            }}
          >
            Choose the plan that fits your needs. All plans include high-quality
            code, responsive design, and ongoing support.
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

      {/* Pricing cards */}
      <section className="relative bg-white px-8 py-16 md:px-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(238, 242, 255, 0) 0%, rgba(238, 242, 255, 0.30) 50%, rgba(238, 242, 255, 0) 100%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          <PricingCard
            title="Starter"
            subtitle="Perfect for small projects and MVPs"
            price="$2,500"
            priceLabel="per project"
            features={starterFeatures}
            ctaLabel="Get Started"
            ctaHref="/contact"
            variant="outline"
          />
          <PricingCard
            title="Professional"
            subtitle="Ideal for growing businesses"
            price="$5,000"
            priceLabel="per project"
            features={professionalFeatures}
            ctaLabel="Get Started"
            ctaHref="/contact"
            variant="solid"
            badge="Most Popular"
          />
          <PricingCard
            title="Enterprise"
            subtitle="For complex applications and ongoing work"
            price="Custom"
            priceLabel="contact us"
            features={enterpriseFeatures}
            ctaLabel="Get Started"
            ctaHref="/contact"
            variant="outline"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 py-24 md:px-20">
        <h2
          className="mx-auto mb-12 max-w-[896px] text-center text-3xl font-bold leading-10 text-[#0F172A] md:text-[30.6px]"
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            lineHeight: "40px",
          }}
        >
          Frequently Asked Questions
        </h2>
        <FAQAccordion />
      </section>

      {/* Still Have Questions CTA */}
      <section
        className="px-8 py-24 md:px-20"
        style={{
          background:
            "linear-gradient(176deg, #EEF2FF 0%, #FAF5FF 100%)",
        }}
      >
        <div className="mx-auto flex max-w-[896px] flex-col items-center gap-6 text-center">
          <h2
            className="text-3xl font-bold leading-10 text-[#0F172A] md:text-[30.6px]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "40px",
            }}
          >
            Still Have Questions?
          </h2>
          <p
            className="max-w-[726px] text-base font-normal text-[#0F172A] md:text-[17px]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "32px",
            }}
          >
            Schedule a free consultation to discuss your project and get a
            custom quote.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#1E293B] px-8 py-4 text-[15.3px] font-medium text-white shadow-lg transition-opacity hover:opacity-95"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "28px",
              boxShadow:
                "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 8px 10px -6px rgba(0, 0, 0, 0.10)",
            }}
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
