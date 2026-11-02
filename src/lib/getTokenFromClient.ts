import { authClient } from "./auth-client";

export const getTokenFromClient = async () => {
    const { data, error } = await authClient.token()
    if (error) {
        console.dir(error)
    }
    const token = data?.token
    const finalToken = `Bearer ${token}`
    return finalToken
}