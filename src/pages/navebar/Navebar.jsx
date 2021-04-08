import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import About from "../about/About";

const Navbar = () => {
  return (
    <>
     
        <div className="row">
          <div className="col-10 mx-auto ">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <NavLink className="navbar-brand" to="/">
                <img
                  src={process.env.PUBLIC_URL + "/img/web.png "}
                  alt="img fail to load"
                  width="255px"
                  height="60px"
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav_btn"
                      exact
                      className="nav-link "
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav_btn"
                      exact
                      className="nav-link"
                      to="/service"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav_btn"
                      exact
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav_btn"
                      exact
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default Navbar;
