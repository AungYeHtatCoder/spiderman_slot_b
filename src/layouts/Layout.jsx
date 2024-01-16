import React from 'react'
import { Outlet } from 'react-router-dom'
import Hero from '../components/User/Hero'
import HomeFooter from '../components/User/HomeFooter'
import Footer from '../components/User/Footer'
import Platform from '../components/User/Platform'

export default function Layout() {
  return (
    <>
    <div className='homeBody text-white pb-0'>
      <Hero />
      <HomeFooter />
      
      <Outlet />

      
      <Platform />
      <Footer />
    </div>
    </>
  )
}
