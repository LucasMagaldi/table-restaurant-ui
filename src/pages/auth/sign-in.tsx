import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignIn() {
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
        <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input id="email" type="email"/>
            </div>
            <Button className="w-full" type="submit">Access painel</Button>
            
        </form>
      </div>
    </div>
  )
}

