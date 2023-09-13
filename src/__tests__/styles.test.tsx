import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GlitchText, ToggleButton, StyledButton, InputField } from "../styles";

describe("Styled Components", () => {
  it("<GlitchText /> applies styles correctly based on glitchOn prop", () => {
    const { getByText, rerender } = render(
      <GlitchText glitchOn={true} data-text="Test">
        Test
      </GlitchText>
    );

    expect(getByText("Test")).toHaveStyle("animation: glitch 1.5s infinite");

    rerender(
      <GlitchText glitchOn={false} data-text="Test">
        Test
      </GlitchText>
    );

    expect(getByText("Test")).not.toHaveStyle(
      "animation: glitch 1.5s infinite"
    );
  });

  it("<ToggleButton /> applies styles correctly based on isActive prop", () => {
    const { container } = render(<ToggleButton isActive={true} />);
    const button = container.firstChild;

    expect(button).toHaveStyle("background-color: #00FF00");

    expect(button).toHaveStyle(`
      ::before {
        left: 35px;
      }
    `);
  });

  it("<StyledButton /> has correct hover styles", () => {
    const { container } = render(<StyledButton />);
    const button = container.firstChild;

    expect(button).toHaveStyle("background-color: #003300");
  });

  it("<InputField /> has the correct styles", () => {
    const { container } = render(<InputField />);
    const input = container.firstChild;

    expect(input).toHaveStyle("border: 2px solid #00ff00");
    expect(input).toHaveStyle("background-color: #001100");
  });
});
