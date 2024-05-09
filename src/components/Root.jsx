import React from 'react'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'

export const Root = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
