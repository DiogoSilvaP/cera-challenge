import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CarerInfo from "./CarerInfo";

describe("<CarerInfo />", () => {
  const mockOnClick = jest.fn();
  test("it should mount", () => {
    render(
      <CarerInfo
        name="someName"
        photo="somePhoto"
        slots={4}
        onClickButton={mockOnClick}
      />
    );

    const carerInfo = screen.getByTestId("CarerInfo");

    expect(carerInfo).toBeInTheDocument();
  });
  
  // Example test of mock fn
  test("it should call callback function", () => {
    render(
      <CarerInfo
        name="someName"
        photo="somePhoto"
        slots={4}
        onClickButton={mockOnClick}
      />
    );

    fireEvent.click(screen.getByText("Check Availability"));
    expect(mockOnClick).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
