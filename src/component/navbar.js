import React from "react";
import "./App.css";
import "./red.jpg";
import NavUseState from "./Nav-UseState";
import Description from "./Description-above";
// import Search from "./Search-bar";
import Navbar1 from "./Navbar1";
import Down from "./Down";

export const Navbar = () => {
  return (
    <>
      <div className="container image">
        <Navbar1 />
        {/* <Description/> */}

        <NavUseState />

        {/* <Search /> */}
        {/* <Down/> */}
      </div>
    </>
  );
};

export default Navbar;
