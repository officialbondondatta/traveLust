"use client"
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button";
import { authClient, useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";

const UserPopOver = () => {
    const { data: session } = useSession()
    const user = session?.user
    const router = useRouter()

    const handleSignOut = async () => {
        const result = await authClient.signOut()
        if (result?.data?.success) {
            alert("You are signed out")
            router.refresh()
        }
    }
    return (
        <Popover>
            <PopoverTrigger className={`cursor-pointer`}>
                <Avatar>
                    <AvatarImage src={user?.image || ""} />
                    <AvatarFallback className="">User</AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    <PopoverTitle>{user?.name}</PopoverTitle>
                    <PopoverDescription>{user?.email}</PopoverDescription>
                </PopoverHeader>
                <Button className={`cursor-pointer`} onClick={handleSignOut} variant={"destructive"}>Sign Out</Button>
            </PopoverContent>
        </Popover>
    );
};

export default UserPopOver;