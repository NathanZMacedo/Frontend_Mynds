import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Contact from '../../Components/Contact/Contact'

function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Contact/>
    </div>
  )
}

export default Layout