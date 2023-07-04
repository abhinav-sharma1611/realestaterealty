import React from 'react'
import { Link } from "react-router-dom";

export const Navbar3 = () => {
  return (
    <>
  <nav className='distance-nav1'>
  <div class="nav nav-tabs distance-na distance-nav1" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">Why Redfin</button>
   <Link class="nav-link " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" >Our Agents</Link>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Buy with redfin</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Sell with Redfin</button>
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
    </>
  )
}


export default Navbar3