import React from 'react'
import { Link } from "react-router-dom";

export const Navbar3 = () => {
  return (
    <div className='container'>
  <nav className='distance-nav'>
  <div class="nav nav-tabs distance-na dixt-nav" id="nav-tab" role="tablist">
    <button class="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Search</button>
   <a href='#overview1'>  <button class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Overview</button> </a>
   <a href='#prop-det'><button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">property Details</button> </a>
   <a href='#tax'><button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Sales and Tax</button> </a>
   <a href='#school'><button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Schools</button></a>
  </div>
  <nav>
  <div class="nav nav-tabs  distance-nav23" id="nav-tab" role="tablist">
    <button class="nav-link " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Favorite</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">X-Out</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Share</button>
  </div>
</nav>
</nav>
    </div>
  )
}


export default Navbar3