import React from 'react';
import Navbar2 from '../component/Navbar2';
import NavbarInsideAbout from '../component/NavbarInsideAbout';
import InsideOurAgentContent from '../component/Inside-About/InsideOurAgentContent';
import Agent from '../component/Agent';
import Footer from '../component/footer';

export const InsideOueAgent = () => {
  return (
    <>
    <Navbar2/>
    <hr/>
    <NavbarInsideAbout/>
    <InsideOurAgentContent/>
    <Agent/>
    <Footer/>
    </>
  )
}

export default InsideOueAgent;
