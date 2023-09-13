import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";
import "@testing-library/jest-dom/extend-expect";

describe("<Button />", () => {
  it("renders the button with given children", () => {
    const { getByText } = render(<Button>Click Me!</Button>);
    expect(getByText("Click Me!")).toBeInTheDocument();
  });

  it("applies passed styles to the button", () => {
    const customStyle = {
      backgroundColor: "red"
    };
    const { getByText } = render(
      <Button style={customStyle}>Styled Button</Button>
    );
    expect(getByText("Styled Button")).toHaveStyle("background-color: red");
  });

  it("sets the aria-label correctly", () => {
    const { getByLabelText } = render(
      <Button ariaLabel="custom label">Aria Label Button</Button>
    );
    expect(getByLabelText("custom label")).toBeInTheDocument();
  });
});
