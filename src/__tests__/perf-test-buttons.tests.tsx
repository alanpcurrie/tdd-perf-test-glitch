import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PerfTestButtons } from "../PerfTestButtons";
import { performanceReducer } from "../reducers";
import GlitchTextContext from "../GlitchTextContext";

jest.mock("./reducers", () => ({
  performanceReducer: jest.fn()
}));

describe("PerfTestButtons", () => {
  const mockContextValue = {
    glitchOn: true,
    setGlitchOn: jest.fn()
  };

  beforeEach(() => {
    render(
      <GlitchTextContext.Provider value={mockContextValue}>
        <PerfTestButtons />
      </GlitchTextContext.Provider>
    );
  });

  it("renders without crashing", () => {
    expect(screen.getByText(/testing/)).toBeInTheDocument();
  });

  it("updates the input field and sets the condition on submit", () => {
    const input = screen.getByPlaceholderText("Enter condition");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(input, { target: { value: "5000" } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/testing 5000 conditons/)).toBeInTheDocument();
  });

  it("dispatches the correct action when Test getCondition button is clicked", () => {
    const testButton = screen.getByText("Test getCondition");

    fireEvent.click(testButton);

    expect(performanceReducer).toHaveBeenCalledWith(expect.any(Object), {
      type: "SET_CONDITION",
      payload: expect.any(Number)
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
