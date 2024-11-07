import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerRestaurant } from "@/hooks/api-authentication";
import { useMutation } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signUpFormSchema = z.object({
    restaurant: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string()
})

type SignUpForm = z.infer<typeof signUpFormSchema>

export function SignUp() {
    const navigate = useNavigate()
    const { mutateAsync: registerRestaurantFn } = useMutation({
        mutationFn: registerRestaurant
    })

    const { 
        register,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<SignUpForm>()

    async function handleSignUp(data: SignUpForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            await registerRestaurantFn({
                email: data.email,
                managerName: data.name,
                phone: data.phone,
                restaurantName: data.restaurant
            })

            toast.success('Registering restaurant successfully', {
                action: {
                    label: 'Login',
                    onClick: () => navigate(`/sign-in?email=${data.email}`)
                }
            })
            navigate(`/sign-in?email=${data.email}`)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('Error while registering restaurant')
        }
    }

    return (
        <div className="p-8">
            <div className="flex flex-col w-[350px] justify-center gap-6">
                <div className="flex flex-col text-center">
                    <h1 className="font-semibold text-2xl tracking-tighter">
                        Create free account
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Be part of the best platform to manage sales
                    </p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                    <div className="space-y-2">
                        <Label htmlFor="restaurant">Restaurant name</Label>
                        <Input id="restaurant" type="text" {...register('restaurant')}/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" type="text" {...register('name')}/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Your email</Label>
                        <Input id="email" type="email" {...register('email')}/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Your phone</Label>
                        <Input id="phone" type="tel" {...register('phone')}/>
                    </div>
                    <Button className="w-full" disabled={isSubmitting} type="submit">Sign up</Button>
                </form>
            </div>
        </div>
    )
}
