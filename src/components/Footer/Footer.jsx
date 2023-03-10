import React from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { themeContext } from '../../context/themeContext'; //contexto

function Footer() {
  const { theme } = useContext(themeContext); // CONTEXT
  const counter = useSelector(state => state.counterR.counter); // REDUX
  const message = useSelector(state => state.messageR.message); // REDUX
  const userData = useSelector(state => state.userR);

  return (
    <footer className={"footer" + theme}>
        <p>Contador: {counter}.Mensaje: {message}. Nº usuarios:{userData.users.length}. Made with &#9829; by Alex & Guille</p>       
    </footer>
  )
}

export default Footer