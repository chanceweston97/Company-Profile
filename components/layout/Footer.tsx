"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WestonLogo } from "@/components/ui/WestonLogo";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const footerLinks = {
  product: [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
      <Container>
        <div className="py-12 md:py-16">
          <AnimateOnScroll direction="up" amount={0.1} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="inline-block text-zinc-900 dark:text-zinc-100">
                <WestonLogo className="h-12 w-32 object-contain md:h-14 md:w-36" />
              </Link>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Software services that scale with your business.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
                Product
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="none" delay={0.15} className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              © {currentYear} Weston Tech Solutions. All rights reserved.
            </p>
          </AnimateOnScroll>
        </div>
      </Container>
    </footer>
  );
}
