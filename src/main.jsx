import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import AppliedJobs from './AppliedJobs';
import ErrorPage from './ErrorPage';
import JobDtails from './JobDtails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/Applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "/jobs/:id",
        element: <JobDtails></JobDtails> ,
        loader: () => fetch('../jobs.json')
      },
    ],
     


  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
