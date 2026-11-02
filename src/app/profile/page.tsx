"use client";

import Link from "next/link";
import { CalendarDays, Mail, MapPin, UserRound } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
    const { data: session, isPending, error } = useSession();
    const user = session?.user;

    return (
        <main className="min-h-full bg-gray-50 px-6 py-12 md:py-16">
            <div className="text-center">
                <h1 className="text-4xl font-normal tracking-[-0.05em] md:text-5xl">My Profile</h1>
                <p className="mt-3 text-lg text-neutral-500">Your account and travel details</p>
            </div>

            <section className="mx-auto mt-8 max-w-xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-10" aria-label="Profile details">
                {isPending ? (
                    <p role="status" className="text-center text-neutral-500">Loading your profile...</p>
                ) : error ? (
                    <p role="alert" className="text-center text-red-600">Unable to load your profile. Please try again.</p>
                ) : !user ? (
                    <div className="space-y-5 text-center">
                        <p className="text-neutral-500">Sign in to view your profile.</p>
                        <Button nativeButton={false} render={<Link href="/signin" />} className="rounded-none bg-cyan-600 text-white hover:bg-cyan-700">Sign In</Button>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col items-center text-center">
                            <Avatar className="size-24">
                                <AvatarImage src={user.image || ""} alt={user.name} />
                                <AvatarFallback className="bg-cyan-50 text-3xl text-cyan-600">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <h2 className="mt-4 text-2xl tracking-tight">{user.name}</h2>
                            <p className="mt-1 break-all text-sm text-neutral-500">{user.email}</p>
                        </div>

                        <dl className="mt-8 space-y-5 border-t border-neutral-100 pt-6">
                            <div>
                                <dt className="flex items-center gap-2 text-sm text-neutral-500"><UserRound className="size-4" aria-hidden="true" /> Full Name</dt>
                                <dd className="mt-2 break-words">{user.name}</dd>
                            </div>
                            <div>
                                <dt className="flex items-center gap-2 text-sm text-neutral-500"><Mail className="size-4" aria-hidden="true" /> Email Address</dt>
                                <dd className="mt-2 break-all">{user.email}</dd>
                            </div>
                            <div>
                                <dt className="flex items-center gap-2 text-sm text-neutral-500"><CalendarDays className="size-4" aria-hidden="true" /> Member Since</dt>
                                <dd className="mt-2">{new Date(user.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "Asia/Dhaka" })}</dd>
                            </div>
                        </dl>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            <Button nativeButton={false} render={<Link href="/bookings" />} className="h-11 rounded-none bg-cyan-600 text-white hover:bg-cyan-700"><CalendarDays aria-hidden="true" /> My Bookings</Button>
                            <Button nativeButton={false} render={<Link href="/destinations" />} variant="outline" className="h-11 rounded-none"><MapPin aria-hidden="true" /> Explore Destinations</Button>
                        </div>
                    </>
                )}
            </section>
        </main>
    );
}
