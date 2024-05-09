import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import { Root } from './components/Root.jsx';
import { Blog } from './components/Blog.jsx';
import Homes from './Homes.jsx';
import CardDescription from './components/CardDescription.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Error from './components/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Homes></Homes>,
      },
      {
        path: '/description/:id',
        element:<CardDescription></CardDescription>,
        loader: () => fetch('/public/service.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
