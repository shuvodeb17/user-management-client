import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddUser from './components/AddUser/AddUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: 'add-user',
    element: <AddUser />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
