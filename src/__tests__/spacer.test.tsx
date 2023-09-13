import React from "react";
import { render } from "@testing-library/react";
import { Spacer } from "../Spacer";
import "@testing-library/jest-dom/extend-expect";

describe("<Spacer />", () => {
  it("renders correctly with default props", () => {
    const { container } = render(
      <Spacer size={10} as={"div"} direction={"horizontal"} />
    );
    const spacer = container.firstChild;

    expect(spacer?.nodeName).toBe("DIV");
    expect(spacer).toHaveStyle("height: 1px");
    expect(spacer).toHaveStyle("width: 10px");
  });

  it("applies horizontal spacing correctly", () => {
    const { container } = render(
      <Spacer direction="horizontal" size={10} as={"div"} />
    );
    const spacer = container.firstChild;

    expect(spacer).toHaveStyle("width: 10px");
    expect(spacer).toHaveStyle("height: 1px");
  });

  it("applies vertical spacing correctly", () => {
    const { container } = render(
      <Spacer direction="vertical" size={10} as={"div"} />
    );
    const spacer = container.firstChild;

    expect(spacer).toHaveStyle("height: 10px");
    expect(spacer).toHaveStyle("width: 1px");
  });

  it("allows changing the element type using the as prop", () => {
    const { container } = render(
      <Spacer as="span" size={10} direction={"horizontal"} />
    );
    const spacer = container.firstChild;

    expect(spacer?.nodeName).toBe("SPAN");
  });
});
