import { api } from "@/lib/axios"

interface GetProfileResponse {
    id: string
    name: string
    email: string
    phone: string | null
    role: 'manager' | 'customer'
    createdAt: Date | null
    updatedAt: Date | null
}

interface UpdateProfileBody {
    name: string
    description: string | null
}

export async function getUserProfile() {
    const respose = await api
        .get<GetProfileResponse>('/me')
    
    return respose.data
}

export async function updateUserProfile({ name, description }: UpdateProfileBody) {
    await api.put('/profile', { name, description })
}