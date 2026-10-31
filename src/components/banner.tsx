import Link from "next/link";
import { ArrowRight } from "lucide-react";

const searchFields = [
  { name: "location", label: "Location", placeholder: "Address, City Or Zip" },
  { name: "duration", label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { name: "budget", label: "Budget", placeholder: "$0–$3000" },
  { name: "people", label: "People", placeholder: "5–10" },
];

export default function Banner() {
  return (
    <section
      aria-labelledby="banner-title"
      className="relative flex min-h-[640px] flex-col justify-end bg-slate-800 bg-cover bg-center text-white md:min-h-[510px] md:h-[min(760px,100svh)]"
      style={{ backgroundImage: "linear-gradient(rgba(5, 24, 26, 0.57), rgba(5, 24, 26, 0.57)), url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2400&q=85')" }}
    >
      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-36 pb-16 text-center md:pt-28 md:pb-14">
        <h1 id="banner-title" className="text-5xl leading-[1.02] font-light tracking-[-0.055em] sm:text-6xl md:text-[68px] lg:text-7xl">
          Discover Your<br />Next Adventure
        </h1>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
          Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs font-medium uppercase">
          <Link href="/destinations" className="inline-flex min-h-11 items-center justify-center gap-5 bg-cyan-600 px-5 transition-colors hover:bg-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Explore Now <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/destinations" className="inline-flex min-h-11 items-center justify-center bg-white/35 px-5 backdrop-blur-sm transition-colors hover:bg-white/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            View Destination
          </Link>
        </div>
      </div>
      <form action="/destinations" method="get" role="search" aria-label="Find your next trip" className="grid grid-cols-2 bg-white/35 backdrop-blur-sm md:grid-cols-[repeat(4,minmax(0,1fr))_minmax(130px,0.65fr)]">
        {searchFields.map(({ name, label, placeholder }) => (
          <label key={name} className="flex min-w-0 flex-col gap-1 border-r border-b border-white/30 px-4 py-3 focus-within:bg-white/15 md:border-b-0">
            <span className="text-sm">{label}</span>
            <input name={name} type="text" placeholder={placeholder} className="w-full min-w-0 bg-transparent text-xs text-white placeholder:text-white/90 focus:outline-none" />
          </label>
        ))}
        <button type="submit" className="col-span-2 min-h-14 bg-cyan-600 px-6 text-sm font-semibold transition-colors hover:bg-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white md:col-span-1">
          Search
        </button>
      </form>
    </section>
  );
}
