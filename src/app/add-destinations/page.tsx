"use client";

import { Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddDestinationPage() {

    const inputClass = "rounded-none border-neutral-100 bg-gray-50 shadow-none";

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget
        const formData = new FormData(form)
        const newPackage = Object.fromEntries(formData.entries())

        const result = await fetch(`${process.env.NEXT_PUBLIC_LOCALURL}/add-destination`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })

        const res = await result.json()

        if (res.insertedId) {
            form.reset()
            alert("Destination added successfully")
        }

    }

    return (
        <main className="mx-auto max-w-7xl px-6 py-10 md:px-12">
            <h1 className="text-3xl font-normal tracking-tight">Add New Travel Package</h1>

            <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl space-y-4 border border-neutral-100 bg-white p-6 shadow-sm sm:p-7">
                <div className="space-y-2">
                    <Label htmlFor="destination">Destination Name</Label>
                    <Input id="destination" name="destination" placeholder="Bali Paradise" required className={inputClass} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" name="country" placeholder="Indonesia" required className={inputClass} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select name="category" defaultValue="Beach" required>
                            <SelectTrigger id="category" className={`w-full ${inputClass}`}>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Beach">Beach</SelectItem>
                                <SelectItem value="Mountain">Mountain</SelectItem>
                                <SelectItem value="City">City</SelectItem>
                                <SelectItem value="Adventure">Adventure</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="price">Price (USD)</Label>
                        <Input id="price" name="price" type="number" min="0" step="0.01" placeholder="e.g. 1299" required className={inputClass} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="duration">Duration</Label>
                        <Input id="duration" name="duration" placeholder="e.g. 7 Days/6 Nights" required className={inputClass} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="departure">Departure Date</Label>
                    <Input id="departure" name="departure" type="date" required className={inputClass} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input id="image" name="image" type="url" placeholder="https://example.com/image.jpg" required className={inputClass} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" placeholder="Describe the travel experience..." required className={`min-h-28 ${inputClass}`} />
                </div>

                <div className="flex flex-wrap justify-end gap-3 pt-3">
                    <Button type="reset" variant="outline" className="h-10 rounded-none border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600">
                        <Trash2 aria-hidden="true" /> Cancel
                    </Button>
                    <Button type="submit" className="h-10 rounded-none bg-cyan-600 text-white hover:bg-cyan-700">
                        <Save aria-hidden="true" /> Add Travel Package
                    </Button>
                </div>
            </form>
        </main>
    );
}
