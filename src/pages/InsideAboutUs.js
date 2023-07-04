import React from 'react'
import Navbar2 from '../component/Navbar2';
import Navbar3 from '../component/Navbar3';
import NavbarInsideAbout from '../component/NavbarInsideAbout';
import InsideAboutContents from '../component/Inside-About/InsideAboutContents';
import Agent from '../component/Agent';
import Footer from '../component/footer';
import { useEffect } from 'react';

export const InsideAboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
   <>
    <Navbar2/>
    <hr/>
    <NavbarInsideAbout/>
    <InsideAboutContents/>
    <Agent/>
    <Footer/>
    
   </>
  )
}

export default InsideAboutUs;
