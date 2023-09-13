import React, { useContext, useReducer, useState } from "react";
import {
  getCondition,
  getConditionWithComposition,
  x as getConditionWithCurriedComposition
} from "./condition-map";
import { Spacer } from "./Spacer";
import { Button } from "./Button";
import type { ConditionEvaluator } from "./types";
import { Output, SubmitButton, InputField, GlitchText } from "./styles";
import GlitchTextContext from "./GlitchTextContext";
import { performanceReducer } from "./reducers";

export const PerfTestButtons = () => {
  const [condition, setCondition] = useState<number | null>(1000);
  const [inputValue, setInputValue] = useState<string>("");
  const context = useContext(GlitchTextContext);
  if (!context) throw new Error("must be used within a GlitchTextProvider");
  const { glitchOn } = context;

  const perfTest = (cb: ConditionEvaluator) => {
    const start = performance.now();
    const conditions = Array(condition)
      .fill(false)
      .reduce((acc, _, index) => {
        acc[`key-${index}`] = false;
        return acc;
      }, {});
    cb(conditions);
    const end = performance.now();
    return end - start;
  };

  const handleSubmit = () => {
    const numericValue = parseFloat(inputValue);
    if (isNaN(numericValue)) throw new Error("Invalid number entered");
    setCondition(numericValue);
    setInputValue("");
  };

  const [state, dispatch] = useReducer(performanceReducer, {
    conditionPerformance: 0,
    compositionPerformance: 0,
    xPerformance: 0
  });

  return (
    <>
      <Output>testing {condition} conditons</Output>
      <Button
        ariaLabel="Click to perform set condition"
        onClick={() =>
          dispatch({ type: "SET_CONDITION", payload: perfTest(getCondition) })
        }
      >
        Test getCondition
      </Button>
      <Output>
        <GlitchText
          glitchOn={glitchOn}
          data-text={`Performance for getCondition:  ${state.conditionPerformance} milliseconds`}
        >
          Performance for getCondition: {state.conditionPerformance}{" "}
          milliseconds
        </GlitchText>
      </Output>

      <Spacer as="div" direction="vertical" size={20} />

      <Button
        ariaLabel="Click to perform set composition"
        onClick={() =>
          dispatch({
            type: "SET_COMPOSITION",
            payload: perfTest(getConditionWithComposition)
          })
        }
      >
        Test getConditionWithComposition
      </Button>

      <Output>
        <GlitchText
          glitchOn={glitchOn}
          data-text={`Performance for getConditionWithComposition: ${state.compositionPerformance} milliseconds`}
        >
          Performance for getConditionWithComposition:{" "}
          {state.compositionPerformance} milliseconds
        </GlitchText>
      </Output>

      <Spacer as="div" direction="vertical" size={20} />

      <Button
        ariaLabel="Click to perform set curried composition"
        onClick={() =>
          dispatch({
            type: "SET_X",
            payload: perfTest(getConditionWithCurriedComposition)
          })
        }
      >
        Test getConditionWithCurriedComposition
      </Button>
      <Output>
        <GlitchText
          glitchOn={glitchOn}
          data-text={`Performance for getConditionWithCurriedComposition: ${state.xPerformance} milliseconds`}
        >
          Performance for getConditionWithCurriedComposition:{" "}
          {state.xPerformance} milliseconds
        </GlitchText>
      </Output>
      <Spacer as="div" direction="vertical" size={20} />
      <InputField
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter condition"
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </>
  );
};
