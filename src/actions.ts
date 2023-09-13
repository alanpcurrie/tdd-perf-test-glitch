import { PerformanceAction, PerformanceState } from "./types";

export const ACTION_TO_STATE_MAP: Record<
  PerformanceAction["type"],
  keyof PerformanceState
> = {
  SET_CONDITION: "conditionPerformance",
  SET_COMPOSITION: "compositionPerformance",
  SET_X: "xPerformance"
};
