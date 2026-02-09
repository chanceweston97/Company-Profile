"use client";

import Link from "next/link";
import { WestonLogo } from "@/components/ui/WestonLogo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const serviceLinks = [
  { href: "/services#web-development", label: "Web Development" },
  { href: "/services#mobile-apps", label: "Mobile Apps" },
  { href: "/services#consulting", label: "Consulting" },
  { href: "/contact", label: "Book a Session" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-100 bg-black px-[80px] pt-px">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-start gap-8 px-8 py-12">
        <div className="flex w-full flex-wrap items-end justify-center gap-8">
          {/* Logo + tagline */}
          <div className="flex w-[280px] flex-col gap-4">
            <Link href="/" className="text-white">
              <WestonLogo className="h-[63px] w-[178px] object-contain" />
            </Link>
            <p className="font-inter text-sm font-normal leading-5 text-white">
              Expert software solutions delivered online with 8 years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex w-[280px] flex-col gap-4">
            <h3 className="font-inter text-base font-semibold leading-[19.2px] text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm font-normal leading-5 text-white transition-colors hover:opacity-80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex w-[280px] flex-col gap-4">
            <h3 className="font-inter text-base font-semibold leading-[19.2px] text-white">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm font-normal leading-5 text-white transition-colors hover:opacity-80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex w-[280px] flex-col gap-4">
            <h3 className="font-inter text-base font-semibold leading-[19.2px] text-white">
              Contact
            </h3>
            <a
              href="mailto:ceo@westontechsolutions.com"
              className="flex items-center gap-2 font-inter text-sm font-normal leading-5 text-white transition-colors hover:opacity-80"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              ceo@westontechsolutions.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex w-full items-center justify-between border-t border-gray-100 pt-8">
          <p className="font-inter text-sm font-normal leading-5 text-white">
            © {currentYear} Weston Tech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-inter text-sm font-normal leading-5 text-white transition-colors hover:opacity-80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-inter text-sm font-normal leading-5 text-white transition-colors hover:opacity-80"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
