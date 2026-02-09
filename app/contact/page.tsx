"use client";

import { useState } from "react";

const cardShadow =
  "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 1px 3px rgba(0, 0, 0, 0.10), 0px 1px 2px rgba(0, 0, 0, 0.06)";
const iconGradient = "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)";
const iconShadow =
  "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -4px rgba(0, 0, 0, 0.10)";

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl" style={{ background: iconGradient }} />
      <div
        className="relative flex items-start gap-5 rounded-xl bg-white p-6"
        style={{ boxShadow: cardShadow }}
      >
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ background: iconGradient, boxShadow: iconShadow }}
        >
          <Icon />
        </div>
        <div className="min-w-0">
          <p
            className="text-[15.3px] font-semibold leading-7 text-[#0F172A]"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            {label}
          </p>
          <p
            className="mt-2 text-[11.9px] font-normal leading-5 text-[#64748B]"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main
      className="relative flex min-h-screen flex-col"
      style={{ background: "linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), white" }}
    >
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-20"
        style={{
          paddingLeft: "clamp(1.5rem, 5vw, 272px)",
          paddingRight: "clamp(1.5rem, 5vw, 272px)",
          paddingTop: "96px",
          paddingBottom: "96px",
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
              GET IN TOUCH
            </span>
          </div>
          <h1
            className="mt-[62px] text-center text-5xl font-bold leading-[60px] md:text-[60px]"
            style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
          >
            <span className="text-[#0F172A]">Let&apos;s Start a</span>
            <br />
            <span className="text-[#6366F1]">Conversation</span>
          </h1>
          <p
            className="mt-9 max-w-[768px] text-center text-xl font-normal text-[#64748B]"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: "32.5px",
            }}
          >
            Have a project in mind? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white px-8 py-24 md:px-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-[405px_1fr]">
          {/* Left: Contact info + Slack */}
          <div className="flex flex-col gap-6">
            <ContactCard
              icon={EmailIcon}
              label="Email"
              value="ceo@westontechsolutions.com"
            />
            <ContactCard
              icon={PhoneIcon}
              label="Phone"
              value="+1 (555) 123-4567"
            />
            <ContactCard
              icon={LocationIcon}
              label="Location"
              value="Remote - Serving clients worldwide"
            />
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{ background: "rgba(99, 102, 241, 0.23)", filter: "blur(12px)" }}
                aria-hidden
              />
              <div
                className="relative rounded-xl bg-white p-6"
                style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
              >
                <h3 className="text-[15.3px] font-semibold leading-7 text-black">
                  Join Our Slack Community
                </h3>
                <p className="mt-4 text-[11.9px] font-normal leading-[22px] text-black">
                  Connect with us directly on Slack for quick questions and real-time
                  collaboration.
                </p>
                <a
                  href="#"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#1E293B] py-3 text-[11.9px] font-medium text-white transition-opacity hover:opacity-95"
                  style={{ lineHeight: "20px" }}
                >
                  <span className="inline-block h-4 w-4 rounded border border-white bg-white" />
                  Join Slack
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: iconGradient }}
            />
            <div
              className="relative rounded-xl bg-white p-8 md:p-10"
              style={{ boxShadow: cardShadow }}
            >
              <h2
                className="text-[25.5px] font-bold leading-9 text-[#0F172A]"
                style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
              >
                Send Us a Message
              </h2>
              {submitted ? (
                <p className="mt-8 text-[15.3px] text-[#64748B]">
                  Thank you! We&apos;ll get back to you as soon as possible.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="flex items-center gap-1 text-[11.9px] font-medium leading-5 text-[#0F172A]">
                        Name <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, name: e.target.value }))
                        }
                        className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#0F172A] placeholder:text-[#CCCCCC] focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]"
                        style={{
                          fontFamily: "var(--font-inter), Inter, sans-serif",
                          lineHeight: "25px",
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-1 text-[11.9px] font-medium leading-5 text-[#0F172A]">
                        Email <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, email: e.target.value }))
                        }
                        className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#0F172A] placeholder:text-[#CCCCCC] focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]"
                        style={{
                          fontFamily: "var(--font-inter), Inter, sans-serif",
                          lineHeight: "25px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-1 text-[11.9px] font-medium leading-5 text-[#0F172A]">
                      Subject <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, subject: e.target.value }))
                      }
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#0F172A] placeholder:text-[#CCCCCC] focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]"
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        lineHeight: "25px",
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-1 text-[11.9px] font-medium leading-5 text-[#0F172A]">
                      Message <span className="text-[#EF4444]">*</span>
                    </label>
                    <textarea
                      required
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, message: e.target.value }))
                      }
                      rows={6}
                      className="w-full resize-y rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#0F172A] placeholder:text-[#CCCCCC] focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]"
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        lineHeight: "25px",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#6366F1] py-4 text-[15.3px] font-medium text-white shadow-lg shadow-indigo-500/20 transition-opacity hover:opacity-95"
                    style={{
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      lineHeight: "28px",
                      boxShadow:
                        "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0), 0px 20px 25px -5px rgba(99, 102, 241, 0.20), 0px 8px 10px -6px rgba(99, 102, 241, 0.20)",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
