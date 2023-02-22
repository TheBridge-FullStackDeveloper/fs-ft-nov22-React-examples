import React from 'react'
import { useContext } from 'react';

import { themeContext } from '../../context/themeContext'; //contexto

function Footer() {
  const { theme } = useContext(themeContext);

  return (
    <footer className={"footer" + theme}>Esto es el footer</footer>
  )
}

export default Footer