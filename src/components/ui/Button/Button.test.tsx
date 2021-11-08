import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("<Button />", () => {
  const mockClick = jest.fn();
  test("it should mount", () => {
    render(<Button onClick={mockClick} />);

    const button = screen.getByTestId("Button");

    expect(button).toBeInTheDocument();
  });
});
