import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/RootLayout.tsx';
import DashboardPage from './Pages/DashboardPage.tsx';
import ReportsPage from './Pages/ReportsPage.tsx';
import AccountPage from './Pages/Acounts.tsx';
import ProductPage from './Pages/Product.tsx';
import UsersPage from './Pages/UsersPage.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import LoginPage from './Pages/LoginPage.tsx';
import RegisterPage from './Pages/RegisterPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element: <DashboardPage />,
            },
            {
                path: '/dashboard',
                element: <DashboardPage />,
            },
            {
                path: '/reports',
                element: <ReportsPage />,
            },
            {
                path: '/account',
                element: <AccountPage />,
            },
            {
                path: '/product',
                element: <ProductPage />,
            },
            {
                path: '/users',
                element: <UsersPage />,
            },
            {
                path: '/error',
                element: <ErrorPage />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage/>,
    },
    {
        path: '/register',
        element: <RegisterPage/>,
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
