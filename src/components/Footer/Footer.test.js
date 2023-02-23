import React from "react";
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

import { themeContext } from '../../context/themeContext'; //contexto


describe("Footer", () => {
  test("matches snapshot", () => {

    let theme ="__dark";
    const toggleTheme = () => theme === "" ? setTheme("__dark") : setTheme("")

    const themeData = {
      theme, //"__dark" o ""
      toggleTheme
    }

    render(
      <themeContext.Provider value={themeData}>
        <Footer />
      </themeContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
