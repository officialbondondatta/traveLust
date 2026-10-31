"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "My Profile", href: "/profile" },
];

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  const [newsletterMessage, setNewsletterMessage] = useState("");

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNewsletterMessage("Newsletter signup is coming soon. Please contact us for travel updates.");
  }

  return (
    <footer className="bg-[#0c0a09] px-6 pt-16 pb-6 text-white md:px-12 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="inline-block text-5xl leading-none font-bold tracking-tight sm:text-6xl md:text-7xl">
          TraveLust
        </Link>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        <div className="mt-11 grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <h2 className="text-sm font-normal uppercase">Newsletter</h2>
            <p className="mt-2 text-[11px] text-neutral-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form onSubmit={handleSubscribe} className="mt-3 flex max-w-64 bg-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter email"
                required
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-300"
              />
              <button type="submit" aria-label="Subscribe to newsletter" className="flex size-10 shrink-0 items-center justify-center transition-colors hover:bg-neutral-600 focus-visible:outline-2 focus-visible:outline-white">
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </button>
            </form>
            <p role="status" className="mt-2 max-w-64 text-xs text-neutral-400">{newsletterMessage}</p>
          </div>

          {[{ title: "Quick Links", links: quickLinks }, { title: "Support", links: supportLinks }].map(({ title, links }) => (
            <nav key={title} aria-label={`Footer ${title.toLowerCase()}`}>
              <h2 className="text-sm font-normal uppercase">{title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-400">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-500">{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-sm font-normal uppercase">Contact Us</h2>
            <address className="mt-4 space-y-3 text-sm text-neutral-400 not-italic">
              <p><a href="tel:7869011622" className="hover:text-white">786 901 1622</a></p>
              <p><a href="mailto:info@wandarland.com" className="hover:text-white">info@travelust.com</a></p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-4">
          <p className="text-[11px] text-neutral-400">© 2026 TraveLsut. All rights reserved.</p>
          {/* Add profile links when the brand's social account URLs are available. */}
          <div className="flex items-center gap-6">
            <span role="img" aria-label="X" className="text-lg leading-none">𝕏</span>
            <span role="img" aria-label="LinkedIn" className="flex size-4 items-center justify-center rounded-[1px] bg-white font-sans text-xs font-bold text-neutral-950">in</span>
            <svg role="img" aria-label="Instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
