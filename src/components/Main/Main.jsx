import React, { Component } from "react";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import InfoList from './InfoList';
import Staff from './Staff';
import NotFound from '../NotFound';
import { Routes, Route } from "react-router-dom";

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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>;
  }
}

export default Main;
