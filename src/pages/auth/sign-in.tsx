import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from 'zod'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signInFormSchema = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof signInFormSchema>

export function SignIn() {
  const { 
    register, 
    handleSubmit, 
    formState: { isSubmitting }
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('We sent the authentication link to your email', {
        action: {
          label: 'Resent', 
          onClick: () => {
            handleSignIn(data)
          }
        }
      })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Invalid credentials')
    }
  }

  return (
    <div className="p-8">
      <div className="flex flex-col w-[350px] justify-center gap-6">
        <div className="flex flex-col text-center">
          <h1 className="font-semibold text-2xl tracking-tighter">
            Go though the site
          </h1>
          <p className="text-sm text-muted-foreground">
            Review your sells and more!
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input id="email" type="email" {...register('email')}/>
            </div>
            <Button 
              className="w-full" 
              type="submit" 
              disabled={isSubmitting}>
                Access painel
            </Button>
        </form>
      </div>
    </div>
  )
}

