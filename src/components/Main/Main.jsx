import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useContext } from 'react';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import InfoList from './InfoList';
import Staff from './Staff';
import Donations from './Donations';
import Topic from './Topic';
import Djs from './Djs';
import PruebaRedux from './PruebaRedux';
import NotFound from '../NotFound';

import { themeContext } from '../../context/themeContext'; //contexto

function Main() {
  const { theme } = useContext(themeContext);

  return (
    <main className={"main"+theme}>
      <h1>Welcome to the carnival</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/infolist" element={<InfoList />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/djs" element={<Djs />} />
        <Route path="/redux" element={<PruebaRedux />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default Main
