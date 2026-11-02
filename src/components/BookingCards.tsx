'use client'
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CircleCheck, Clock, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Booking } from "@/types/booking";
import type { Destination } from "@/types/destination";
import { useRouter } from "next/navigation";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const BookingCards = ({ booking, destination }: { booking: Booking; destination?: Destination }) => {
    const router = useRouter()
    const status = booking.status?.toLowerCase() || "pending";
    const confirmed = status === "confirmed";
    const departure = new Date(booking.bookingData["user-departure"]);
    const date = Number.isNaN(departure.getTime()) ? "Not specified" : departure.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

    const handleCancelBooking = async () => {
        const token = await getTokenFromClient()
        const result = await fetch(`${process.env.NEXT_PUBLIC_LOCALURL}/booking/${booking?._id}`, {
            method: "DELETE",
            headers: {
                authorization: token
            }
        })
        const res = await result.json()
        if (res.deletedCount > 0) {
            alert("Booking Cancelled Successfully")
            router.refresh()
        }
    }
    return (
        <article className="grid gap-6 border border-neutral-100 bg-white p-5 shadow-sm md:grid-cols-[minmax(220px,1fr)_2fr]">
            <div className="relative aspect-video overflow-hidden bg-neutral-100">
                {destination?.image ? <Image src={destination.image} alt={destination.destination} fill unoptimized sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /> : <div className="flex h-full items-center justify-center text-sm text-neutral-500">Image unavailable</div>}
            </div>
            <div className="flex min-w-0 flex-col">
                <span className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm capitalize ${confirmed ? "bg-green-50 text-green-600" : status === "pending" ? "bg-orange-50 text-orange-500" : "bg-neutral-100 text-neutral-600"}`}>
                    {confirmed ? <CircleCheck className="size-4" aria-hidden="true" /> : <Clock className="size-4" aria-hidden="true" />} {status}
                </span>
                <h2 className="mt-2 text-3xl font-medium tracking-tight">{destination?.destination || "Destination unavailable"}</h2>
                <p className="mt-4 flex items-center gap-2 text-sm text-neutral-500"><CalendarDays className="size-4 shrink-0" aria-hidden="true" /> Departure: {date}</p>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-5">
                    <p className="text-3xl text-cyan-600">{destination ? `$${Number(destination.price).toLocaleString("en-US")}` : "Price unavailable"}</p>
                    <div className="flex gap-3">
                        <Button onClick={handleCancelBooking} variant="outline" title="Cancellation is not available yet" className="h-11 rounded-none border-red-300 px-5 text-red-500"><Trash2 aria-hidden="true" /> Cancel</Button>
                        {destination && <Button nativeButton={false} render={<Link href={`/destinations/${encodeURIComponent(destination._id ?? destination.destination)}`} />} className="h-11 rounded-none bg-cyan-600 px-5 text-white hover:bg-cyan-700"><Eye aria-hidden="true" /> View</Button>}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BookingCards;
