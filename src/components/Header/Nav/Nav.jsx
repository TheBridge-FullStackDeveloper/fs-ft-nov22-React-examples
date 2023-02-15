import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <nav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      <Link to="/infolist">Info List</Link>
      <Link to="/staff" >Staff</Link>
    </nav>;
  }
}

export default Nav;
