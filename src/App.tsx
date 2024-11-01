import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { router } from "./routes";
import { ThemeProvider } from "./context/theme";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Toaster richColors/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}