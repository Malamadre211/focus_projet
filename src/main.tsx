import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './routes/Home.tsx'
import { Histoire } from './routes/Histoire.tsx'

const router = createBrowserRouter ([ 
  {
      path: "/",
      element: <Home />
},
  {
    	path: "/Histoire",
      element: <Histoire />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
