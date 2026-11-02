"use client"

import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
    const { data: session, isPending, error } = useSession()
    const user = session?.user

    if (isPending) return <p className="p-10 text-center">Loading...</p>
    if (error) return <p className="p-10 text-center">Unable to load your profile.</p>
    if (!user) return <p className="p-10 text-center">Please <Link href="/signin" className="text-cyan-600 underline">sign in</Link> to view your profile.</p>

    return (
        <main className="bg-gray-50 px-6 py-12">
            <h1 className="text-center text-4xl tracking-tight">My Profile</h1>
            <div className="mx-auto mt-8 max-w-xl space-y-6 border bg-white p-6 shadow-sm sm:p-10">
                <Avatar className="mx-auto size-24">
                    <AvatarImage src={user.image || ""} alt={user.name} />
                    <AvatarFallback className="bg-cyan-50 text-3xl text-cyan-600">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>

                <div>
                    <h2 className="text-sm text-neutral-500">Full Name</h2>
                    <p className="mt-1 break-words text-lg">{user.name}</p>
                </div>
                <div>
                    <h2 className="text-sm text-neutral-500">Email Address</h2>
                    <p className="mt-1 break-all text-lg">{user.email}</p>
                </div>
                <div>
                    <h2 className="text-sm text-neutral-500">Member Since</h2>
                    <p className="mt-1">{new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Dhaka" })}</p>
                </div>

                <Button nativeButton={false} render={<Link href="/bookings" />} className="h-11 w-full rounded-none bg-cyan-600 text-white hover:bg-cyan-700">
                    My Bookings
                </Button>
            </div>
        </main>
    );
};

export default ProfilePage;
