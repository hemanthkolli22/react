import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Jobcards from "./components/Jobcards";
import JobApplication from "./components/Jobapplication"
import Jobpostings from "./components/Jobpositing"
import Companyprofile from "./components/Companyprofile"
import Profilecard from "./components/Profilecard"


const appRouter =createBrowserRouter([
  { path: '/', element:<Home/>},
  { path: '/login',element:<Login/>},
  { path: '/register',element:<Register/>},
  { path: "/jobcards", element: <Jobcards /> },
  { path: "/jobapplication", element: <JobApplication /> },
  { path: "/jobcards", element: <Jobcards /> },
  { path: "/jobpositing", element:<Jobpostings/>},
  { path: "/companyprofile",element:<Companyprofile />},
  { path: "/profilecard",element:<Profilecard />}
  
])
function App() {
  return (
 <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default App
