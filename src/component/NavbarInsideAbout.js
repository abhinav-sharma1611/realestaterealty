import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Navbar3 = () => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/OurAgent`; 
    navigate(path);
  }
  const routeChange2 = () => {
    let path = `/insideaboutus`; 
    navigate(path);
  }
  const routeChange4 = () => {
    let path = `/insideaboutus`; 
    navigate(path);
  }
  return (
    <div className='container'>
  <nav className='distance-nav1'>
  <div class="nav nav-tabs distance-na distance-nav1" id="nav-tab" role="tablist">
    <Link onClick={routeChange2} class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Why Redfin </Link>
   <Link onClick={routeChange} class="nav-link  " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" >Our Agents</Link>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Buy with redfin</button>
    <Link onClick={routeChange4} class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Sell with Redfin</Link>
  </div>
  {/* <div>
  <button type="button" class="btn btn-danger btn-width">Danger</button>
  </div> */}
  
  {/* <nav>
  <div class="nav nav-tabs  distance-nav2" id="nav-tab" role="tablist">
    <button class="nav-link " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Favorite</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">X Out</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Share</button>
  </div>
</nav> */}
</nav>
    </div>
  )
}


export default Navbar3