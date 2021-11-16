import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
//import Button from 'react-bootstrap/Button'
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger justify-content-center" >
        <NavLink className="navbar-brand" to="/" style={{ marginLeft: 20 }}>
          <button type="button" class="btn btn-dark btn-md">Image Gallery</button>
        </NavLink>
        <NavLink className="nav-link" to="/create">
          <button type="button" class="btn btn-dark btn-md">Add New Image</button>
        </NavLink>
      </nav>
    </div>
  );
};
 
export default Navbar;