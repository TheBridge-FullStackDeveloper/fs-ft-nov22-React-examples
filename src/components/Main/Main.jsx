import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import About from './About';
import Contact from './Contact';
import Home from './Home';
import InfoList from './InfoList';
import Staff from './Staff';
import Donations from './Donations';
import Topic from './Topic';
import NotFound from '../NotFound';

class Main extends Component {
  render() {
    return <main>
      <h1>Welcome to the carnival</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/infolist" element={<InfoList />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>;
  }
}

export default Main;
