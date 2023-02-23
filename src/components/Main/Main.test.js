import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import Main from "./Main";

import { themeContext } from '../../context/themeContext'; // contexto

describe("Main", () => {
  test("matches snapshot", () => {

    let theme = "__dark";
    const toggleTheme = () => theme === "" ? setTheme("__dark") : setTheme("")

    const themeData = {
      theme, //"__dark" o ""
      toggleTheme
    }
    render(
      <BrowserRouter>
        <themeContext.Provider value={themeData}>
          <Main />
        </themeContext.Provider>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
