import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function EditProfileModal() {
    return (
        <DialogContent>
            <DialogHeader>
                <h1 className="text-xl font-bold tracking-tight">Store profile</h1>              
                <DialogDescription className="py-1 border-b-2">
                    Update your store information visible to the customer
                </DialogDescription>
            </DialogHeader>
            <form className="mt-4 flex flex-col gap-6">
                <div className="flex items-center justify-end gap-6">
                    <Label>Name</Label>
                    <Input className="w-[350px]"/>
                </div>
                <div className="flex items-center justify-end gap-6">
                    <Label>Description</Label>
                    <Textarea className="w-[350px]"/>
                </div>
                <DialogFooter className="flex gap-4 justify-end">
                    <DialogClose>
                        <Button 
                        variant='ghost'>
                            Cancel
                        </Button>                        
                    </DialogClose>

                    <Button variant='default' type="submit">Save</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}