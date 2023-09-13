import React, { useContext } from "react";
import { render, act } from "@testing-library/react";
import GlitchTextProvider from "../GlitchTextProvider";
import GlitchTextContext from "../GlitchTextContext";
import "@testing-library/jest-dom/extend-expect";

describe("GlitchTextContext", () => {
  it("provides a default value of null", () => {
    function TestComponent() {
      const contextValue = useContext(GlitchTextContext);
      return <div>{contextValue ? "Has value" : "No value"}</div>;
    }

    const { getByText } = render(<TestComponent />);
    expect(getByText("No value")).toBeInTheDocument();
  });

  it("provides the expected values when wrapped with a provider", () => {
    const mockValue = {
      glitchOn: true,
      setGlitchOn: jest.fn()
    };

    function TestComponent() {
      const contextValue = useContext(GlitchTextContext);
      return <div>{contextValue && contextValue.glitchOn ? "On" : "Off"}</div>;
    }

    const { getByText } = render(
      <GlitchTextContext.Provider value={mockValue}>
        <TestComponent />
      </GlitchTextContext.Provider>
    );

    expect(getByText("On")).toBeInTheDocument();
  });
});

describe("<GlitchTextProvider />", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <GlitchTextProvider>
        <div>Test Child</div>
      </GlitchTextProvider>
    );
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("provides the correct default context values", () => {
    let contextValues;
    render(
      <GlitchTextProvider>
        <GlitchTextContext.Consumer>
          {(values) => {
            contextValues = values;
            return null;
          }}
        </GlitchTextContext.Consumer>
      </GlitchTextProvider>
    );
    expect(contextValues.glitchOn).toBe(true);
    expect(typeof contextValues.setGlitchOn).toBe("function");
  });

  it("allows the context value to be updated", () => {
    let contextValues;
    const { rerender } = render(
      <GlitchTextProvider>
        <GlitchTextContext.Consumer>
          {(values) => {
            contextValues = values;
            return null;
          }}
        </GlitchTextContext.Consumer>
      </GlitchTextProvider>
    );

    // Initially, the glitchOn value should be true
    expect(contextValues.glitchOn).toBe(true);

    // Update the context value
    act(() => {
      contextValues.setGlitchOn(false);
    });

    // Rerender to get the updated context value
    rerender(
      <GlitchTextProvider>
        <GlitchTextContext.Consumer>
          {(values) => {
            contextValues = values;
            return null;
          }}
        </GlitchTextContext.Consumer>
      </GlitchTextProvider>
    );

    expect(contextValues.glitchOn).toBe(false);
  });
});
