import { GrRestaurant } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { Separator } from "../ui/separator";
import { NavLink } from "../nav-link";
import { AccountMenu } from "../account-menu";
import { ThemeToggle } from "../theme-toggle";


export function Header() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                <GrRestaurant size={26}/>

                <Separator orientation="vertical"/>

                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink to="/">
                        <IoHomeOutline size={22}/>
                        home
                    </NavLink>

                    <NavLink to="/orders">
                        <CgNotes size={22}/>
                        orders
                    </NavLink>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <ThemeToggle />
                    <AccountMenu />
                </div>
            </div>
        </div>
    )
}