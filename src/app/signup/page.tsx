"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { Image as ImageIcon } from "lucide-react";

export default function SignUpPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const inputClass = "h-12 rounded-none border-neutral-100 bg-gray-50 pl-11 shadow-none";

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name")).trim();
        const email = String(formData.get("email")).trim();
        const image = String(formData.get("image")).trim()
        const password = String(formData.get("password"));
        const confirmPassword = String(formData.get("confirmPassword"));

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if (!name) {
            alert("Please enter your name.");
            return;
        }
        setLoading(true);
        try {
            const { error, data } = await authClient.signUp.email({ name, email, password, image });
            if (error) {
                alert(error.message || "Could not create your account.");
                return;
            }
            form.reset();
            console.log(data)
            router.push("/");
            router.refresh();
        } catch {
            alert("Unable to create your account. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-full bg-gray-50 px-6 py-12 md:py-16">
            <div className="text-center">
                <h1 className="text-4xl text-slate-700 font-normal tracking-[-0.05em] md:text-5xl">Create Account</h1>
                <p className="mt-3 text-lg text-neutral-500">Start your adventure with Wanderlust</p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-7 max-w-xl space-y-5 border border-neutral-100 bg-white p-6 shadow-md sm:p-10">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                        <UserRound aria-hidden="true" className="pointer-events-none absolute top-4 left-4 size-4 text-neutral-500" />
                        <Input id="name" name="name" autoComplete="name" placeholder="Enter your name" required className={inputClass} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                        <Mail aria-hidden="true" className="pointer-events-none absolute top-4 left-4 size-4 text-neutral-500" />
                        <Input id="email" name="email" type="email" autoComplete="email" placeholder="Enter your email" required className={inputClass} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="image">Image</Label>
                    <div className="relative">
                        <ImageIcon aria-hidden="true" className="pointer-events-none absolute top-4 left-4 size-4 text-neutral-500" />
                        <Input id="image" name="image" type="text" autoComplete="text" placeholder="Image link" required className={inputClass} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <LockKeyhole aria-hidden="true" className="pointer-events-none absolute top-4 left-4 size-4 text-neutral-500" />
                        <Input id="password" name="password" type="password" autoComplete="new-password" minLength={8} maxLength={128} placeholder="Create a password" required className={inputClass} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                        <LockKeyhole aria-hidden="true" className="pointer-events-none absolute top-4 left-4 size-4 text-neutral-500" />
                        <Input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" minLength={8} maxLength={128} placeholder="Confirm your password" required className={inputClass} />
                    </div>
                </div>
                <Button type="submit" disabled={loading} className="h-14 w-full rounded-none bg-cyan-600 text-base text-white hover:bg-cyan-700">
                    {loading ? "Creating Account..." : "Create Account"}
                </Button>
                <div className="flex items-center gap-4 text-neutral-500">
                    <span className="h-px flex-1 bg-neutral-100" />
                    <span>Or sign up with</span>
                    <span className="h-px flex-1 bg-neutral-100" />
                </div>
                <Button type="button" variant="outline" onClick={() => alert("Google signup is not available yet. Please use email signup.")} className="h-14 w-full gap-3 rounded-none border-neutral-100 text-base font-normal">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
                        <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.89-1.74 2.98-4.3 2.98-7.36Z" />
                        <path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22Z" />
                        <path fill="#FBBC05" d="M6.41 13.92a6 6 0 0 1 0-3.84V7.49H3.07a10 10 0 0 0 0 9.02l3.34-2.59Z" />
                        <path fill="#EA4335" d="M12 5.96c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.93 5.49l3.34 2.59C7.2 7.72 9.4 5.96 12 5.96Z" />
                    </svg>
                    Sign Up With Google
                </Button>
                <p className="pt-1 text-center text-neutral-500">
                    Already have an account? <Link href="/signin" className="font-medium text-cyan-600 hover:underline">Sign In</Link>
                </p>
            </form>
        </main>
    );
}
