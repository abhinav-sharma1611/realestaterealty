import React from 'react'
import Navbar1 from '../component/Navbar1';
import Navbar2 from '../component/Navbar2';
import Navbar3 from '../component/Navbar3';
import InsideImage from '../component/InsideImage';
import InsideData from '../component/InsideData';
import PropertyDetails from '../component/PropertyDetails';
import Tax from '../Tax';
import School from '../component/School';
import Footer from '../component/footer';


export const BlogPage = () => {
  return (
    <>
    <Navbar2/>
    <hr/>
    <Navbar3/>
    <InsideImage/>
    <InsideData />
    <PropertyDetails/>
    <Tax/>
    <School />
    <Footer />
    </>
  )
}
export default BlogPage;