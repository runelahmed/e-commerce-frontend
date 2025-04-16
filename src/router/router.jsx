import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Collection from '../pages/Collection'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import PlaceOrder from '../pages/PlaceOrder'
import Order from '../pages/Order'
import MainLayout from '../layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/collection',
        element: <Collection />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/product/:productId',
        element: <Product />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/place-order',
        element: <PlaceOrder />,
      },
      {
        path: '/order',
        element: <Order />,
      },
    ],
  },
]);

export default router