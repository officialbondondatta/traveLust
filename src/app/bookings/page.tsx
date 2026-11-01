import BookingHelper from "@/components/booking/BookingHelper";
import { Suspense } from "react";

const bookingPage = () => {

    return (
        <main className="mx-auto max-w-7xl px-6 py-10 md:px-12">
            <h1 className="text-4xl font-normal tracking-[-0.05em] md:text-5xl">My Bookings</h1>
            <p className="mt-3 text-lg text-neutral-500">Manage and view your upcoming travel plans</p>
            <Suspense fallback={<p>loading..</p>}>
                <BookingHelper></BookingHelper>
            </Suspense>
        </main>
    );
};

export default bookingPage;
