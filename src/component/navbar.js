import React from 'react'
import './App.css'
import './new.jpg'
import Description from './Description-above'

import  Navbar1  from './Navbar1'
import Hero from './Down'
import  Agent  from './Agent'
import Footer from './footer'
import Feed from './Feed'


export const Navbar = () => {
  return (
   <>
     
      <Navbar1/>  
      <Feed/>
       <Hero/>
      <Agent/>
      <Footer/> 
   </>
  )
}

export default Navbar;