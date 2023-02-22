import React from 'react'
import { useContext } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import { userContext } from '../../../context/userContext'; //contexto
import { themeContext } from '../../../context/themeContext'; //contexto


function Nav() {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <nav className={"nav-bar"+theme}>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      <Link to="/infolist">Info List</Link>
      <Link to="/staff" >Staff</Link>
      <Link to="/donations" >Donations</Link>
      <Link to="/topic" >Topic</Link>
      <Link to="/djs" >Djs</Link>

      <userContext.Consumer>
        {({ logout, user }) => user ?
          <span>Hola, {user} <Button variant="contained" size="small" onClick={logout}>Logout</Button></span>
          : ""
        }
      </userContext.Consumer>

      <Button variant="contained" size="small" onClick={toggleTheme}>&#127749; &#127747;</Button>
    </nav>
  )
}

export default Nav
