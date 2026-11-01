import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Check, MapPin, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Destination } from "@/types/destination";
import EditButtonDialog from "./EditButtonDialog";
import DeleteAlert from "./DeleteAlert";

export default async function DetailedDestination({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const res = await fetch(`${process.env.LOCALURL}/destinations/${id}`);
    if (!res.ok) throw new Error("Unable to load destination");
    const destination: Destination = await res.json();


    const highlights = destination.highlights?.length ? destination.highlights : [
        `${destination.category} experience`,
        `Explore ${destination.country}`,
        destination.duration,
    ];

    return (
        <>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <Link href="/destinations" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-cyan-600">
                    <ArrowLeft aria-hidden="true" className="size-4" /> Back to Destinations
                </Link>
                <div className="flex gap-3 items-center justify-center">
                    <EditButtonDialog editableDestination={destination} />
                    <DeleteAlert id={id} />
                </div>
            </div>

            <div className="relative aspect-[2.55/1] min-h-52 overflow-hidden bg-neutral-100">
                <Image src={destination.image} alt={destination.destination} fill priority unoptimized sizes="(min-width: 1280px) 1184px, 100vw" className="object-cover" />
            </div>

            <div className="mt-7 grid items-start gap-8 border-t border-neutral-100 pt-7 pb-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
                <div>
                    <p className="flex items-center gap-1 text-xs text-neutral-500"><MapPin aria-hidden="true" className="size-3.5" /> {destination.country}</p>
                    <h1 className="mt-2 text-4xl font-normal tracking-[-0.05em] md:text-5xl">{destination.destination}</h1>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm">
                        {destination.rating != null && <p className="flex items-center gap-1"><Star aria-hidden="true" className="size-4 fill-green-600 text-green-600" /> {destination.rating} {destination.reviewCount != null && <span className="text-neutral-500">({destination.reviewCount} reviews)</span>}</p>}
                        <p className="flex items-center gap-1"><CalendarDays aria-hidden="true" className="size-3.5 text-neutral-500" /> {destination.duration}</p>
                    </div>
                    <section className="mt-8">
                        <h2 className="text-2xl tracking-tight">Overview</h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-500">{destination.description}</p>
                    </section>
                    <section className="mt-7">
                        <h2 className="text-2xl tracking-tight">Highlights</h2>
                        <ul className="mt-4 grid gap-3 text-xs leading-relaxed text-neutral-500 sm:grid-cols-2">
                            {highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2"><Check aria-hidden="true" className="size-4 shrink-0 text-green-600" /> {highlight}</li>)}
                        </ul>
                    </section>
                </div>

                <aside aria-label="Booking details" className="border border-neutral-100 bg-white p-4 shadow-[0_3px_4px_rgb(0_0_0/0.12)]">
                    <p className="text-xs text-neutral-500">Starting from</p>
                    <p className="mt-1 text-3xl text-cyan-600">${Number(destination.price).toLocaleString("en-US")}</p>
                    <p className="mt-1 text-xs text-neutral-500">per person</p>
                    <form action="/bookings" method="get" className="mt-8">
                        <input type="hidden" name="destination" value={destination._id ?? destination.destination} />
                        <label htmlFor="departure" className="sr-only">Departure date</label>
                        <Input id="departure" name="departure" type="date" defaultValue={destination.departure?.slice(0, 10)} required className="h-10 rounded-none border-neutral-100 bg-gray-50" />
                        <div className="mt-4 border-t border-neutral-100 pt-4">
                            <Button type="submit" className="h-11 w-full rounded-none bg-cyan-600 text-white hover:bg-cyan-700">Book Now <ArrowRight aria-hidden="true" /></Button>
                        </div>
                    </form>
                    {!!destination.inclusions?.length && <ul className="mt-4 space-y-2 text-xs text-neutral-500">
                        {destination.inclusions.map((item) => <li key={item} className="flex gap-2"><Check aria-hidden="true" className="size-3.5 shrink-0 text-green-600" /> {item}</li>)}
                    </ul>}
                </aside>
            </div>
        </>
    );
}
