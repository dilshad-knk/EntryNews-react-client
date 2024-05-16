import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import { SignupForm } from './Components/SignupForm.jsx'
import NewBlog from './Components/NewBlog.jsx'
import Blogs from './Components/Blogs.jsx'
import Login from './Components/Login.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import Trending from './Components/Trending.jsx'
import ErrorPage from './Components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path:'/signup',
        element:<SignupForm/>
      },
      {
        path:'/new',
        element:(
          <PrivateRoute>
              <NewBlog/>
          </PrivateRoute>
        )
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/trending',
        element:<Trending/>
      },
      {
        path:'/login',
        element:<Login/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
