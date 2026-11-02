"use client"
import { Destination } from "@/types/destination";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const BookingDestination = ({ destination }: { destination: Destination }) => {
    const router = useRouter()
    const { data: session } = useSession()
    const user = session?.user
    const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const bookingData = Object.fromEntries(formData.entries())
        const userName = user?.name
        const userEmail = user?.email
        const fullBookingData = { userName, userEmail, bookingData }

        const token = await getTokenFromClient()

        const result = await fetch(`${process.env.NEXT_PUBLIC_LOCALURL}/booking`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: token
            },
            body: JSON.stringify(fullBookingData)
        })
        const response = await result.json()
        if (response.insertedId) {
            alert('booking successfull')
            form.reset()
            router.refresh()
        }
    }
    return (
        <form onSubmit={handleBooking} method="get" className="mt-8">
            <input type="hidden" name="destination" value={destination._id ?? destination.destination} />
            <label htmlFor="departure" className="sr-only">Departure date</label>
            <Input id="user-departure" name="user-departure" type="date" defaultValue={destination.departure?.slice(0, 10)} required className="h-10 rounded-none border-neutral-100 bg-gray-50" />
            <div className="mt-4 border-t border-neutral-100 pt-4">
                <Button type="submit" className="h-11 w-full rounded-none bg-cyan-600 text-white hover:bg-cyan-700">Book Now <ArrowRight aria-hidden="true" /></Button>
            </div>
        </form>
    );
};

export default BookingDestination;