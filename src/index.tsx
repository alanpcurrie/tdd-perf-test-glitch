import React, { useContext } from "react";
import { render } from "react-dom";
import { PerfTestButtons } from "./PerfTestButtons";
import { perfTest } from "./perf-test";
import { Spacer } from "./Spacer";
import GlitchTextProvider from "./GlitchTextProvider";
import {
  Container,
  Output,
  GlitchText,
  ToggleButton,
  StyledLabel
} from "./styles";
import GlitchTextContext from "./GlitchTextContext";
const { perfResult } = perfTest();

const App = () => {
  const context = useContext(GlitchTextContext);
  if (!context) throw new Error("App must be used within a GlitchTextProvider");
  const { glitchOn, setGlitchOn } = context;

  return (
    <Container>
      <Spacer as="div" direction="vertical" size={20} />
      <Output>
        <h2>
          <GlitchText
            glitchOn={glitchOn}
            data-text={`initial performance Test :  ${perfResult} ms`}
          >
            {`initial performance Test :  ${perfResult} ms`}
          </GlitchText>
          <StyledLabel
            style={{
              display: "block",
              marginTop: "20px",
              cursor: "pointer"
            }}
          >
            Glitch Effect:
            <ToggleButton
              isActive={glitchOn}
              onClick={() => setGlitchOn((prev) => !prev)}
            />
          </StyledLabel>
        </h2>
      </Output>
      <Spacer as="div" direction="vertical" size={20} />
      <PerfTestButtons />
      <Spacer as="div" direction="vertical" size={80} />
    </Container>
  );
};

const Root = () => (
  <GlitchTextProvider>
    <App />
  </GlitchTextProvider>
);

render(<Root />, document.getElementById("root"));
