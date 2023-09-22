import ReactDOM from 'react-dom/client'
import React from 'react'
import TempleteHome from './conponetes/templates/TempleteHome'
import App from './App'
import './Index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const Rotas = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<TempleteHome/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Rotas}/>
  </React.StrictMode>
)
