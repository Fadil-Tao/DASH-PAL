import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/RootLayout.tsx';
import DashboardPage from './Pages/DashboardPage.tsx';
import ReportsPage from './Pages/ReportsPage.tsx';
import AccountPage from './Pages/Acounts.tsx';
import TransactionsPage from './Pages/TransactionPage.tsx';
import ProductPage from './Pages/Product.tsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:"/dashboard",
        element:<DashboardPage/>
      },
      {
        path:'/reports',
        element:<ReportsPage/>
      },
      {
        path:'/account',
        element:<AccountPage/>
      },
      {
        path:'/transaction',
        element:<TransactionsPage/>
      },
      {
        path:'/product',
        element:<ProductPage/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
