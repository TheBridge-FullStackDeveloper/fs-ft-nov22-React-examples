import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux'
import PruebaRedux from "./PruebaRedux";
import store from '../../../redux/store'


describe("PruebaRedux", () => {
  test("matches snapshot", () => {
    render(
      <Provider store={store}>
        <PruebaRedux />
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
