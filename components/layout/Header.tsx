"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { WestonLogo } from "@/components/ui/WestonLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="left-0 top-0 z-50 w-full border-b border-gray-100 bg-black px-20 pb-px backdrop-blur-[6px]"
    >
      <div className="mx-auto flex max-w-[1280px] min-w-0 flex-col items-start justify-start px-8">
        <div className="flex h-20 w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 text-white">
            <WestonLogo className="h-16 w-44 object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center md:flex" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm leading-5 first:pl-0 [&:not(:first-child)]:pl-8 ${
                    isActive ? "font-bold text-white" : "font-medium text-gray-100"
                  } transition-colors hover:text-white`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Join Chat + Client Area */}
          <div className="hidden items-center gap-0 md:flex">
            <Link
              href="#join-chat"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-center text-sm font-medium leading-5 text-white outline outline-2 outline-white/40 outline-offset-[-2px] transition-colors hover:bg-white/10"
              style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
            >
              <ChatIcon className="h-4 w-4 flex-shrink-0" />
              Join Chat
            </Link>
            <Link
              href="#client-area"
              className="ml-3 inline-flex items-center justify-center rounded-full bg-slate-800 px-5 py-2 text-center text-sm font-medium leading-5 text-white transition-colors hover:bg-slate-700"
              style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
            >
              Client Area
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-white/10 md:hidden"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="w-full border-t border-gray-700 py-4 md:hidden">
            <nav className="flex flex-col gap-1" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-gray-700 pt-2">
                <Link
                  href="#join-chat"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-4 py-2.5 text-sm font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ChatIcon className="h-4 w-4" />
                  Join Chat
                </Link>
                <Link
                  href="#client-area"
                  className="inline-flex justify-center rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Client Area
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}
