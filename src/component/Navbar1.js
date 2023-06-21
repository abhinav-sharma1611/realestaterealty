import React from "react";

export const Navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary im">
        <div className="container-fluid  full-width ">
          <a className="navbar-brand text" href="#">
            REDFIN
          </a>

          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> */}
          {/* </button> */}
          <div
            className="collapse navbar-collapse  marg"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand text1 " href="#">
              1-844-759-7732
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  renderMenuOnMount={true}
                >
                  Buy
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <h6>Popular Searches</h6>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      Home for Sale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Condos for Sale
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider" /></li> */}
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      Land for sale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Open Houses
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  renderMenuOnMount={true}
                >
                  Rent
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <h6>Rental Resources</h6>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      List my home for rent{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rental market trends
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider" /></li> */}
                  <li>
                    <a className="dropdown-item" href="#">
                      how much rent can i afford
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      should i rent or guide
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Renter Guide
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Redfin Premier
                </a>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  renderMenuOnMount={true}
                >
                  Mortgage
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <h6>Mortgage</h6>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Compare Rates
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Todays mortgage rates
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider" /></li> */}
                  <li>
                    <a className="dropdown-item" href="#">
                      payment Calculator
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  renderMenuOnMount={true}
                >
                  Real Estate Agents
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Find an Agent
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Join as a redefined Agent
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider" /></li> */}
                  <li>
                    <a className="dropdown-item" href="#">
                      Join our referral network
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Agent Resource Center
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link">Feed</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

            <button type="button" class="btn btn-dark">
              Login
            </button>

            <button type="button" class="btn btn-dark  btn2">
              Signup
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
