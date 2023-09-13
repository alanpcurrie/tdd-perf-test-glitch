import { performanceReducer } from "../reducers";
import type { PerformanceAction, PerformanceState } from "../types";

describe("performanceReducer", () => {
  const initialState: PerformanceState = {
    conditionPerformance: 0,
    compositionPerformance: 0,
    xPerformance: 0
  };

  it("correctly updates conditionPerformance based on SET_CONDITION action", () => {
    const action: PerformanceAction = {
      type: "SET_CONDITION",
      payload: 5
    };

    const newState = performanceReducer(initialState, action);

    expect(newState.conditionPerformance).toBe(5);
    expect(newState.compositionPerformance).toBe(0); // unchanged
    expect(newState.xPerformance).toBe(0); // unchanged
  });

  it("correctly updates compositionPerformance based on SET_COMPOSITION action", () => {
    const action: PerformanceAction = {
      type: "SET_COMPOSITION",
      payload: 15
    };

    const newState = performanceReducer(initialState, action);

    expect(newState.conditionPerformance).toBe(0);
    expect(newState.compositionPerformance).toBe(15);
    expect(newState.xPerformance).toBe(0);
  });

  it("correctly updates xPerformance based on SET_X action", () => {
    const action: PerformanceAction = {
      type: "SET_X",
      payload: 25
    };

    const newState = performanceReducer(initialState, action);

    expect(newState.conditionPerformance).toBe(0);
    expect(newState.compositionPerformance).toBe(0);
    expect(newState.xPerformance).toBe(25);
  });

  it("does not modify the original state", () => {
    const action: PerformanceAction = {
      type: "SET_X",
      payload: 50
    };

    const newState = performanceReducer(initialState, action);

    expect(initialState.xPerformance).toBe(0);
    expect(newState.xPerformance).toBe(50);
  });
});
