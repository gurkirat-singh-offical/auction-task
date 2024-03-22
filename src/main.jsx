import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { createBrowserRouter,RouterProvider } from "react-router-dom"
import AddPlayer from './pages/AddPlayer.jsx'
import AddTeam from './pages/AddTeam.jsx'
import Contanier from './components/Contanier.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Contanier/>
      },
      {
        path:"/add-player",
        element:<AddPlayer/>
       
    },{
      path:"/add-team",
      element:<AddTeam/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <App/>
    </RouterProvider>
    
  </React.StrictMode>
);
