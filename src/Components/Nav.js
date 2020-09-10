import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/cats' activeClassName="active">Cats</NavLink></li>
        <li><NavLink to='/dogs' activeClassName="active">Dogs</NavLink></li>
        <li><NavLink to='/computers' activeClassName="active">Computers</NavLink></li>
      </ul>
    </nav>
  )};

export default Nav;
