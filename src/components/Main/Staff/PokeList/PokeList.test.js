import React from "react";
import { render, screen } from "@testing-library/react";
import PokeList from "./PokeList";

describe("PokeList", () => {
  test("matches snapshot", () => {
    render(<PokeList />);
    expect(screen).toMatchSnapshot();
  });
});
