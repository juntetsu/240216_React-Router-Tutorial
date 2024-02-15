import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import routesBasic from './routesBasic'

const root = ReactDOM.createRoot(document.getElementById('root'))

// React Routerを有効化
root.render(
  <RouterProvider router={routesBasic} />
)