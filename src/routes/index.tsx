import { AppLayout } from '@/pages/_layout/app-layout'
import { AuthLayout } from '@/pages/_layout/auth-layout'
import { Dashboard } from '@/pages/app/dashboard'
import { NotFounded } from '@/pages/app/not-founded'
import { Orders } from '@/pages/app/orders'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFounded />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/orders',
                element: <Orders />
            }
        ]
    }, 
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            }
        ]
    },
])