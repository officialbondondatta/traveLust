import Link from "next/link";
import { UserRound } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-3 top-4 z-10 bg-white text-black">
      <nav aria-label="Main navigation" className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-4 px-4 py-3 md:grid-cols-[1fr_auto_1fr] md:py-2">
        <div className="order-3 col-span-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:order-1 md:col-span-1 md:justify-start">
          {navigation.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={href === "/" ? "page" : undefined} className="whitespace-nowrap underline-offset-4 transition-colors hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-cyan-600 aria-[current=page]:text-cyan-600 aria-[current=page]:underline">
              {label}
            </Link>
          ))}
        </div>
        <Link href="/" className="order-1 text-2xl font-bold tracking-tight text-cyan-600 md:order-2">
          TraveLust
        </Link>
        <div className="order-2 flex items-center justify-end gap-4 text-xs md:order-3 md:gap-6">
          <Link href="/profile" className="flex items-center gap-1 hover:text-cyan-600">
            <UserRound className="size-3" aria-hidden="true" />
            <span>Profile</span>
          </Link>
          <Link href="/login" className="whitespace-nowrap hover:text-cyan-600">Login</Link>
          <Link href="/signup" className="whitespace-nowrap hover:text-cyan-600">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}
