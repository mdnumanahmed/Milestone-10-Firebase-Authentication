import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Phones from './components/Phones/Phones'
import RegisterRbs from './components/Register/RegisterRbs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'phones',
        element: <Phones></Phones>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'register-rbs',
        element: <RegisterRbs></RegisterRbs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
