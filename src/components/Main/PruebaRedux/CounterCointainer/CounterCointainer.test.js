import React from "react";
import { render, screen } from '@testing-library/react'
import {Provider} from 'react-redux'
import store from '../../redux/store'
import CounterCointainer from "./CounterCointainer";

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe("CounterCointainer", () => {
  test("matches snapshot", () => {
    render(<CounterCointainer />, { wrapper: Wrapper });
    expect(screen).toMatchSnapshot();
  });
});
