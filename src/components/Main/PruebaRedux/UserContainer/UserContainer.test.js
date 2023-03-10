import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux'
import store from '../../../../redux/store'

import UserContainer from "./UserContainer";

describe("UserContainer", () => {
  test("matches snapshot", () => {
    render(
    <Provider store={store}>
      <UserContainer />
    </Provider>);
    expect(screen).toMatchSnapshot();
  });
});
