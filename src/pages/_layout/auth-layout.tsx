import { GrRestaurant } from "react-icons/gr";


import { Outlet } from "react-router-dom"

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
        <div className="flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    )
  }