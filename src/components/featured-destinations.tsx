import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DestinationGrid from "@/components/destination-grid";
import DestinationsSkeleton from "@/components/destinations-skeleton";
import type { Destination } from "@/types/destination";

async function FeaturedDestinationCards() {
  const res = await fetch(`${process.env.LOCALURL}/featured-destinations`);
  if (!res.ok) {
    return <p className="mt-8 text-neutral-500">Featured destinations are unavailable right now. Please try again later.</p>;
  }
  const destinations: Destination[] = await res.json();
  return <DestinationGrid destinations={destinations} />;
}

export default function FeaturedDestinations() {
  return (
    <section aria-labelledby="featured-destinations-title" className="bg-white px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 id="featured-destinations-title" className="text-3xl font-normal tracking-[-0.05em] md:text-[40px] md:leading-tight">Featured Destinations</h2>
            <p className="mt-2 text-sm text-neutral-500">Find inspiration for your next adventure</p>
          </div>
          <Link href="/destinations" className="inline-flex items-center gap-2 text-sm text-cyan-600 underline-offset-4 hover:underline">
            View All Destinations <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <Suspense fallback={<DestinationsSkeleton />}>
          <FeaturedDestinationCards />
        </Suspense>
      </div>
    </section>
  );
}
