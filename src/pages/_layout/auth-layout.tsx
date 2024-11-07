import { Button } from "@/components/ui/button";
import { PlusCircleIcon, UserCircle } from "lucide-react";
import { GrRestaurant } from "react-icons/gr";


import { Outlet, useLocation, useNavigate } from "react-router-dom"

function AuthLayoutRedirectOption() {
  const location = useLocation()
  const navigate = useNavigate()
  const isSignUpPage = location.pathname == '/sign-up'
  const icon = isSignUpPage ? <UserCircle size={18}/> : <PlusCircleIcon size={18}/>
  const label = isSignUpPage ? 'Login' : 'Add a new restaurant'
  const navigatePath = isSignUpPage ? '/sign-in' : '/sign-up'

  return (
    <Button className="flex gap-2" variant='outline' onClick={() => navigate(navigatePath)}>
      {icon}
      {label}
  </Button> 
  )
}

export function AuthLayout() {
  return (
      <div className="min-h-screen grid grid-cols-2">
        <div className="flex flex-col h-full justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
          <div className="flex items-center gap-3 text-lg text-foreground">
              <GrRestaurant size={26}/>
              <span 
                className="font-semibold border border-black px-2 py-1 rounded-sm">
                  Grill.Shop
              </span>
          </div>
          <footer>  
              Developed By Lucas Magaldi - {new Date().getFullYear()}
          </footer>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="w-full flex justify-end p-6">
            {AuthLayoutRedirectOption()}
          </div>
          <div className="xl:mb-72 mb-32">
            <Outlet />
          </div>
        </div>
      </div>
    )
  }