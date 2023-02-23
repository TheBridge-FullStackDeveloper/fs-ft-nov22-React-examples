import React from "react";
import { render, screen } from "@testing-library/react";
import InfoItem from "./InfoItem";

describe("InfoItem", () => {
  test("matches snapshot", () => {

    const newEvent = {
      eventName: "Baile de máscaras",
      info: "fiesta en Venecia",
      price: 12,
      image: "https://ae01.alicdn.com/kf/S25de2a5319dc4cbba10f692795a801a4e/M-scaras-venecianas-de-fiesta-para-ni-a-m-scara-veneciana-de-alta-gama-m-scara.jpg_Q90.jpg_.webp"
    };
    

    render(<InfoItem data={newEvent}/>);
    expect(screen).toMatchSnapshot();
  });
});
