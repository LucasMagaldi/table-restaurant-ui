import { z } from "zod";
import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "@/hooks/api-user";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const editProfileSchema = z.object({
    name: z.string(),
    description: z.string()
})

type EditProfileForm = z.infer<typeof editProfileSchema>

export function EditProfileModal() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<EditProfileForm>({

    })

    const { mutateAsync: updateUserProfileFn } = useMutation({
        mutationFn: updateUserProfile
    })

    async function handleUpdateProfile(data: EditProfileForm) {
        try {
            await updateUserProfileFn({
                name: data.name,
                description: data.description
            })

            toast.success('profile updated')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('An error happen during the update process')
        }
    }

    return (
        <DialogContent>
            <DialogHeader>
                <h1 className="text-xl font-bold tracking-tight">Store profile</h1>              
                <DialogDescription className="py-1 border-b-2">
                    Update your store information visible to the customer
                </DialogDescription>
            </DialogHeader>
            <form  onSubmit={handleSubmit(handleUpdateProfile)} className="mt-4 flex flex-col gap-6">
                <div className="flex items-center justify-end gap-6">
                    <Label>Name</Label>
                    <Input {...register('name')} className="w-[350px]"/>
                </div>
                <div className="flex items-center justify-end gap-6">
                    <Label>Description</Label>
                    <Textarea {...register('description')} className="w-[350px]"/>
                </div>
                <DialogFooter className="flex gap-4 justify-end">
                    <DialogClose>
                        <Button 
                        variant='ghost'
                        disabled={!!isSubmitting}>
                            Cancel
                        </Button>                        
                    </DialogClose>

                    <Button variant='default' type="submit" disabled={!!isSubmitting}>Save</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}