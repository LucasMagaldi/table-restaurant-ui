import { Building, ChevronDown, LogOut } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '../ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { useQuery } from '@tanstack/react-query'
import { getUserProfile } from '@/hooks/api-user'
import { getRestaurantInfo } from '@/hooks/api-restaurant'
import { Skeleton } from '../ui/skeleton'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { EditProfileModal } from './edit-profile-modal'


export function AccountMenu() {
    const { data: userProfile, isLoading: isGetUserProfileLoading } = useQuery({
        queryKey: ['user-profile'],
        queryFn: getUserProfile
    })

    const { data: restaurantInfo, isLoading: isGetRestaurantInfoLoading } = useQuery({
        queryKey: ['restaurant-info'],
        queryFn: getRestaurantInfo
    })

    return ( 
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button 
                        variant="outline"
                        className='w-full'
                    >
                        {isGetRestaurantInfoLoading ? (
                            <Skeleton className="h-4 w-[150px]" />
                        ) : (
                            <>
                                {restaurantInfo?.name}
                                <ChevronDown className="h-4 w-4" />
                            </>
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel
                        className='flex flex-col'
                    >
                        {isGetUserProfileLoading ? (
                            <div className='flex flex-col gap-2'>
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        ) : (
                            <>
                                <span>{userProfile?.name}</span>
                                <span
                                    className='text-muted-foreground text-xs font-normal'
                                >
                                    {userProfile?.email}
                                </span>
                            </>
                        )}
                    
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DialogTrigger>
                        <DropdownMenuItem className='cursor-pointer'>
                            <Building className='h-4 w-4 mr-2'/>
                            <span>Profile</span>
                        </DropdownMenuItem>                        
                    </DialogTrigger>

                    <DropdownMenuItem className='cursor-pointer text-rose-600 dark:text-rose-400    '>
                        <LogOut className='h-4 w-4 mr-2'/>
                        <span>Sign out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>          
            <EditProfileModal />  
        </Dialog>   

    )
}