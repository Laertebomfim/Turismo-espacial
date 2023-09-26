import ReactDOM from 'react-dom/client'
import React from 'react'
import TempleteHome from './conponetes/templates/TempleteHome'
import TempleteDestino from './conponetes/templates/TempleteDestino'
import App from './App'
import './Index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const rotas = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<TempleteHome/>
      },
      {
        path:"/home",
        element:<TempleteHome/>
      },
      {
        path:"/destino/:id",
        element:<TempleteDestino/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>
)
