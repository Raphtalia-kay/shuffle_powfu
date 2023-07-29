import React from 'react'
import Navbar from '../NavAndFoot/Navbar'
import Footer from '../NavAndFoot/Footer'
import UpperFooter from '../NavAndFoot/UpperFooter'

const Layout = ({children}) => {
  return (
    <>
       <div className='bg-[#1E3604] w-full  min-h-screen -z-50'>
    <Navbar/>
    {children}
    <UpperFooter/>
    <Footer/>
       </div>
    </>
  )
}

export default Layout
