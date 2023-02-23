import React from "react";
import { render, screen } from "@testing-library/react";
import InfoList from "./InfoList";

describe("InfoList", () => {
  test("matches snapshot", () => {
    render(<InfoList />);
    expect(screen).toMatchSnapshot();
  });
});
