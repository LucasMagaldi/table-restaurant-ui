import { Building, ChevronDown, LogOut } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '../ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'


export function AccountMenu() {
    return (    
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="outline"
                    className='flex items-center gap-2'
                >
                    Table UI
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuLabel
                    className='flex flex-col'
                >
                    <span>Lucas Magaldi</span>
                    <span
                        className='text-muted-foreground text-xs font-normal'
                    >
                        lucas.magaldi@hotmail.com
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer'>
                    <Building className='h-4 w-4 mr-2'/>
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer text-rose-600 dark:text-rose-400    '>
                    <LogOut className='h-4 w-4 mr-2'/>
                    <span>Sign out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}