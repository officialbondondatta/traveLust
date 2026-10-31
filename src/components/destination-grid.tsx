import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import type { Destination } from "@/types/destination";

export default function DestinationGrid({ destinations }: { destinations: Destination[] }) {
  return (
    <>
      <p role="status" className="mt-4 text-sm text-neutral-500">
        Showing {destinations.length} {destinations.length === 1 ? "destination" : "destinations"}
      </p>

      <div className="mt-7 grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((item) => (
          <article key={item._id ?? item.destination} className="min-w-0">
            <div className="relative aspect-video overflow-hidden bg-neutral-100">
              <Image src={item.image} alt={item.destination} fill unoptimized className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            </div>
            <p className="mt-3 flex items-center gap-1 text-xs text-neutral-500">
              <MapPin className="size-3.5" aria-hidden="true" /> {item.country}
            </p>
            <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h2 className="text-lg tracking-tight">{item.destination}</h2>
              <p className="text-base">
                ${Number(item.price).toLocaleString("en-US")}
                <span className="text-[10px] text-neutral-500">/Person</span>
              </p>
            </div>
            <p className="mt-1 flex items-center gap-1 text-xs text-neutral-500">
              <CalendarDays className="size-3.5" aria-hidden="true" /> {item.duration}
            </p>
            <Link href={`/destinations/${item._id}`} className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-cyan-600 underline underline-offset-4 hover:text-cyan-800">
              BOOK NOW <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
      {destinations.length === 0 && (
        <p className="py-12 text-center text-neutral-500">No destinations available yet.</p>
      )}
    </>
  );
}
