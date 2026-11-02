import { headers } from "next/headers";
import { auth } from "./auth";

export const getTokenFromServer = async () => {
    const retriveToken = await auth.api.getToken({
        headers: await headers()
    })
    const token = retriveToken?.token
    const finalToken = `Bearer ${token}`
    return finalToken
}