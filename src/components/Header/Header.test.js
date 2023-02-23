import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import Header from "./Header";

import { userContext } from '../../context/userContext'; // contexto
import { themeContext } from '../../context/themeContext'; // contexto


describe("Header", () => {
  test("matches snapshot", () => {

    let theme = "__dark";
    const toggleTheme = () => theme === "" ? setTheme("__dark") : setTheme("")

    const themeData = {
      theme, //"__dark" o ""
      toggleTheme
    }
    let user = "";
    const login = (name) => setUser(name); // user = name. Ej. name="Guille" --> user="Guille"
    const logout = () => setUser(""); // user = ""

    const data = {
      user,
      login,
      logout
    }

    render(
      <BrowserRouter>
        <userContext.Provider value={data}>
          <themeContext.Provider value={themeData}>
            <Header />
          </themeContext.Provider>
        </userContext.Provider>
      </BrowserRouter>
    );


    expect(screen).toMatchSnapshot();
  });
});
