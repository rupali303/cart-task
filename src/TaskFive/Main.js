import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import StaffCard from "./Components/StaffCard"
import HodDashboard from "./Pages/HodDashboard"
import StaffDashboard from './Pages/StaffDashboard'

function Main() {
  return (
    <div>
        <RouterProvider router={router}/>
        {/* <StaffCard/> */}
        {/* <HodDashboard/> */}
        {/* <StaffDashboard/> */}
    </div>
  )
}

export default Main