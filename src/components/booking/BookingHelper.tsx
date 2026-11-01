import { headers } from "next/headers";
import Link from "next/link";
import { auth } from "@/lib/auth";
import BookingCards from "@/components/BookingCards";
import type { Booking } from "@/types/booking";
import type { Destination } from "@/types/destination";

const BookingHelper = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session) return <p className="mt-8 text-neutral-500">Please <Link href="/signin" className="text-cyan-600 underline">sign in</Link> to view your bookings.</p>;

    const [res, destinationRes] = await Promise.all([
        fetch(`${process.env.LOCALURL}/booking`, { cache: "no-store" }),
        fetch(`${process.env.LOCALURL}/destinations`),
    ]);
    if (!res.ok || !destinationRes.ok) throw new Error("Unable to load bookings");
    const bookings: Booking[] = await res.json();
    const destinations: Destination[] = await destinationRes.json();
    const myBookings = bookings.filter((booking) => booking.userEmail === session.user.email);

    if (!myBookings.length) return <p className="mt-8 text-neutral-500">You haven&apos;t booked a trip yet. <Link href="/destinations" className="text-cyan-600 underline">Explore destinations</Link></p>;
    return (
        <div className="mt-10 space-y-6">
            {myBookings.map((booking) => (
                <BookingCards key={booking._id} booking={booking} destination={destinations.find((item) => (item._id ?? item.destination) === booking.bookingData.destination)} />
            ))}
        </div>
    );
};

export default BookingHelper;
