import ShowcaseDestinations from "@/components/ShowcaseDestinations";
import DestinationsSkeleton from "@/components/destinations-skeleton";
import { Suspense } from "react";

const page = async () => {
    return (
        <main className="mx-auto max-w-7xl px-6 py-10 md:px-12">
            <h1 className="text-3xl font-normal tracking-[-0.05em] md:text-[40px]">Explore All Destinations</h1>
            <p className="mt-2 text-sm text-neutral-500">Find your perfect travel experience from our curated collection</p>
            <Suspense fallback={<DestinationsSkeleton />}>
                <ShowcaseDestinations></ShowcaseDestinations>
            </Suspense>
        </main>
    );
};

export default page;
