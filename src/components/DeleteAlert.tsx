'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react";
import { redirect } from "next/navigation";
const DeleteAlert = ({ id }: { id: string }) => {
    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALURL}/destinations/${id}`, {
            method: "DELETE"
        })
        const result = await res.json()
        if (result.deletedCount > 0) {
            alert("The travel package is deleted successfully")
            redirect("/destinations")
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger render={<Button className={`text-red-500 bg-white border border-slate-600 rounded-none`}><X aria-hidden="true" /> Delete</Button>} />
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure to?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the destination package from the database.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className={`bg-red-600 font-bold`}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteAlert;