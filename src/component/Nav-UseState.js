import React, { useState } from "react";

const Buy = () => {};

const Rent = () => {};

export const NavUseState = () => {
  let rent = ["Local Rentals", <br />, "at your fingertips"];
  let rent2 = ["City, Address, School, Building, ZIP"];

  let buy = ["Search with Redfin.", <br />, "tour with redfin agent"];

  let sell = ["1% listing fee", <br />, "when you buy + sell"];

  let mortgage = ["compare lenders", <br />, "and find a low rate"];

  let home = ["see your home's", <br />, "Redfin Estimate"];


  // let rent1 = ["City, Bitty"];
  // let rent2 = ["City, Gity, Bitty, Litty"];




  const [info, setInfo] = useState(buy);
  // const[info2,setInfo2] = useState('Tour with Redfin Agent.')

// cont [Goal, setGoal] = useState(buy);

const [searchTerm, setSearchTerm] = useState("");


const handleInputChange = (event) => {
  setSearchTerm(event.target.value);
};

const handleSearch = (event) => {
  // event.preventDefault();
  // onSearch(searchTerm);
};

const [goal, setGoal] = useState(rent2); 

// setGoal = rent2;

const handletik = () => {
  if(setGoal==buy){
    goal= "City bakery"
  };
  if(setGoal == rent){
    goal = "Renten,. dental"
  }
}
  return (
    <>
      <div className="inner-div">
        <h3> {info}</h3>
        {/* <h3>{info2}</h3>   */}
      </div>
      <div className="down-nav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary  new-nav">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="navbar-brand" href="#" onClick={(() => setInfo(buy))}>
                  Buy
                </a>
              </li>
              <li class="nav-item ">
                <a class="navbar-brand"  href="#" onClick={() => setInfo(rent)}>
                  Rent
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="#" onClick={() => setInfo(sell)}>
                  Sell
                </a>
              </li>
              <li class="nav-item active">
                <a
                  class="navbar-brand"
                  href="#"
                  onClick={() => setInfo(mortgage)}
                >
                  Mottage
                </a>
              </li>
              <li class="nav-item active">
                <a class="navbar-brand" href="#" onClick={() => setInfo(home)}>
                  Home Estimate
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <form onSubmit={handleSearch} className="d-flex">
      <input
        type="text"
        placeholder={goal}
        onClick={() => setGoal(rent2)}
        value={searchTerm}
        onChange={handleInputChange}
        className="searchbar"
      />

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
    </>
  );
};

export default NavUseState;
