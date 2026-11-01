"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const inputClass = "h-12 rounded-none border-neutral-100 bg-gray-50 pl-11 shadow-none";

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget
        const formData = new FormData(form);
        const email = String(formData.get("email")).trim();
        const password = String(formData.get("password"));

        setLoading(true);
        try {
            const { error } = await authClient.signIn.email({ email, password });
            if (error) {
                alert(error.message || "Could not sign in.");
                return;
            }
            form.reset()
            router.push("/");
            router.refresh();
        } catch {
            alert("Unable to sign in. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-full bg-gray-50 px-6 py-12 md:py-16">
            <div className="text-center">
                <h1 className="text-4xl font-normal tracking-[-0.05em] text-slate-700 md:text-5xl">Welcome Back</h1>
                <p className="mt-3 text-lg text-neutral-500">Sign in to continue your adventure</p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-7 max-w-xl space-y-5 border border-neutral-100 bg-white p-6 shadow-md sm:p-10">
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                        <Mail aria-hidden="true" className="pointer-events-none absolute top-4 left-4 size-4 text-neutral-500" />
                        <Input id="email" name="email" type="email" autoComplete="email" placeholder="Enter your email" required className={inputClass} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <LockKeyhole aria-hidden="true" className="pointer-events-none absolute top-4 left-4 size-4 text-neutral-500" />
                        <Input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required className={inputClass} />
                    </div>
                </div>
                <Button type="submit" disabled={loading} className="h-14 w-full rounded-none bg-cyan-600 text-base text-white hover:bg-cyan-700">
                    {loading ? "Signing In..." : "Sign In"}
                </Button>
                <p className="text-center text-neutral-500">
                    Don&apos;t have an account? <Link href="/signup" className="font-medium text-cyan-600 hover:underline">Sign Up</Link>
                </p>
            </form>
        </main>
    );
}
