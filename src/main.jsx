import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Shop from './Component/Shop/Shop';
import Orders from './Component/Orders/Orders';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import cartProductsLoader from './Loaders/CartProductsLoader';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element:<Shop></Shop>,
      },
      {
       path:'orders',
       element: <Orders></Orders>,
       loader: cartProductsLoader
      },
      {
       path:'inventory',
       element:<Inventory></Inventory>
      },
      {
       path:'login',
       element:<Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
