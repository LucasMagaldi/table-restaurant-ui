import { api } from "@/lib/axios"

interface SignInBodySchema {
    email: string
}

interface RegisterRestaurantBodySchema {
    email: string
    restaurantName: string
    managerName: string
    phone: string
}


export async function signIn({ email }: SignInBodySchema) {
    await api.post('/authenticate', { email })
}

export async function registerRestaurant({ 
    email, 
    managerName,
    phone,
    restaurantName
 } : RegisterRestaurantBodySchema) {
    await api.post('/restaurants', { email, managerName, phone, restaurantName })
}