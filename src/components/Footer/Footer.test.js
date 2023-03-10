import React from "react";
import Footer from "./Footer";
import { Provider } from 'react-redux'
import store from '../../redux/store'

import { render, screen } from "@testing-library/react";

import { themeContext } from '../../context/themeContext'; //contexto


describe("Footer", () => {
  test("matches snapshot", () => {

    let theme = "__dark";
    const toggleTheme = () => theme === "" ? setTheme("__dark") : setTheme("")

    const themeData = {
      theme, //"__dark" o ""
      toggleTheme
    }

    render(
      <Provider store={store}>
        <themeContext.Provider value={themeData}>
          <Footer />
        </themeContext.Provider>
      </Provider>

    );
    expect(screen).toMatchSnapshot();
  });
});
