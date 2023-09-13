import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ConditionSetter } from "../Input";

describe("<ConditionSetter />", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText, getByText } = render(<ConditionSetter />);

    expect(getByPlaceholderText("Enter condition")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("changes input value correctly", () => {
    const { getByPlaceholderText } = render(<ConditionSetter />);
    const input = getByPlaceholderText("Enter condition") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "1234" } });
    expect(input.value).toBe("1234");
  });

  it("handles submit correctly and calls the onSubmit callback", () => {
    const mockSubmit = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <ConditionSetter onSubmit={mockSubmit} />
    );
    const input = getByPlaceholderText("Enter condition") as HTMLInputElement;
    const submitButton = getByText("Submit");

    fireEvent.change(input, { target: { value: "5678" } });
    fireEvent.click(submitButton);
    expect(mockSubmit).toHaveBeenCalledWith(5678);
  });
  // it("throws error on invalid input value", () => {
  //   const { getByText, getByPlaceholderText } = render(<ConditionSetter />);
  //   const input = getByPlaceholderText("Enter condition") as HTMLInputElement;
  //   const submitButton = getByText("Submit");

  //   fireEvent.change(input, { target: { value: NaN } });

  //   expect(() => {
  //     act(() => {
  //       fireEvent.click(submitButton);
  //     });
  //   }).toThrow("Invalid number entered");
  // });
});
