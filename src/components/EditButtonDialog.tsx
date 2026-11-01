"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Pencil } from "lucide-react";
import { Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Destination } from "@/types/destination";
import { useRouter } from "next/navigation";

const EditButtonDialog = ({ editableDestination }: { editableDestination: Destination }) => {
    const router = useRouter()
    const { category, country, image, price, departure, description, destination, duration } = editableDestination;
    const [open, setOpen] = useState(false);

    const inputClass = "rounded-none border-neutral-100 bg-gray-50 shadow-none";

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget
        const formData = new FormData(form)
        const updatedPackage = Object.fromEntries(formData.entries())

        const result = await fetch(`${process.env.NEXT_PUBLIC_LOCALURL}/edit-destination/${editableDestination._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPackage)
        })

        const res = await result.json()

        if (res.modifiedCount > 0) {
            router.refresh()
            alert('Updated package details')
        }

    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="h-9 rounded-none px-5 flex items-center justify-center-safe border gap-2 cursor-pointer"><Pencil className="h-4 w-4" aria-hidden="true" /> Edit</DialogTrigger>
            <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle className={`text-center`}>Edit Travel Package</DialogTitle>
                    <DialogDescription className="text-center">Update the package details below.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <fieldset className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="edit-destination">Destination Name</Label>
                            <Input id="edit-destination" name="destination" defaultValue={destination} required className={inputClass} />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="edit-country">Country</Label>
                                <Input id="edit-country" name="country" defaultValue={country} required className={inputClass} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-category">Category</Label>
                                <Select name="category" defaultValue={category} required>
                                    <SelectTrigger id="edit-category" className={`w-full ${inputClass}`}>
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
                                <Label htmlFor="edit-price">Price (USD)</Label>
                                <Input id="edit-price" name="price" type="number" min="0" step="0.01" defaultValue={price} required className={inputClass} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-duration">Duration</Label>
                                <Input id="edit-duration" name="duration" defaultValue={duration} required className={inputClass} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="edit-departure">Departure Date</Label>
                            <Input id="edit-departure" name="departure" type="date" defaultValue={departure?.slice(0, 10)} required className={inputClass} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-image">Image URL</Label>
                            <Input id="edit-image" name="image" type="url" defaultValue={image} required className={inputClass} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-description">Description</Label>
                            <Textarea id="edit-description" name="description" defaultValue={description} required className={`min-h-28 ${inputClass}`} />
                        </div>

                        <div className="flex flex-wrap justify-end gap-3 pt-3">
                            <Button type="button" onClick={() => setOpen(false)} variant="outline" className="h-10 rounded-none border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600">
                                <Trash2 aria-hidden="true" /> Cancel
                            </Button>
                            <Button type="submit" className="h-10 rounded-none bg-cyan-600 text-white hover:bg-cyan-700">
                                <Save aria-hidden="true" /> Save Changes
                            </Button>
                        </div>
                    </fieldset>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditButtonDialog;