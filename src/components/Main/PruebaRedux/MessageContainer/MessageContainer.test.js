import React from "react";
import { Provider } from 'react-redux'
import store from '../../../../redux/store'
import { render, screen } from "@testing-library/react";
import MessageContainer from "./MessageContainer";

describe("MessageContainer", () => {
  test("matches snapshot", () => {
    render(
      <Provider store={store}>
        <MessageContainer />
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
