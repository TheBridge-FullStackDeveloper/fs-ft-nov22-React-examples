import React from 'react'
import { useContext } from 'react';

import { themeContext } from '../../context/themeContext'; //contexto
import {useSelector} from 'react-redux';

function Footer() {
  const { theme } = useContext(themeContext);
  const counter = useSelector(state => state.counterR.counter);
  const message = useSelector(state => state.messageR.message);
  const userData = useSelector(state => state.userR);

  console.log(userData.users.length);

  return (
    <footer className={"footer" + theme}>Esto es el footer. El contador vale: {counter}. Último msj enviado:{message}. Número de usuarios:{userData.users.length}</footer>
  )
}

export default Footer