import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="mx-6 my-4">
        <Outlet />
      </div>
    </div>
  )
}