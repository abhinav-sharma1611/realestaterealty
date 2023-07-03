import React from 'react'
import './App.css'
import './new.jpg'
import NavUseState from './Nav-UseState'
import Description from './Description-above'
import SearchBar from './Search-bar'
import  Navbar1  from './Navbar1'
import Hero from './Down'
import  Agent  from './Agent'
import Footer from './footer'
import Feed from './Feed'


export const Navbar = () => {
  return (
   <>
     <div className='container image'>
      <Navbar1/>
        
       <Description/> 

     <NavUseState/> 

      <SearchBar/> 
      <Feed/>
       <Hero/>
      <Agent/>
      <Footer/> 
</div>
   </>
  )
}

export default Navbar;