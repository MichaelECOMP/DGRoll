import React from 'react'
import NavMenu from '../NavMenu';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className="home">
      <NavMenu />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout;