import { AppLayout } from '@/pages/_layout/app-layout'
import { AuthLayout } from '@/pages/_layout/auth-layout'
import { Dashboard } from '@/pages/app/dashboard'
import { SignIn } from '@/pages/auth/sign-in'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    }, 
    {
        path: '/sign-in',
        element: <AuthLayout />,
        children: [
            {
                path: '/sign-in',
                element: <SignIn />
            }
        ]
    }
])