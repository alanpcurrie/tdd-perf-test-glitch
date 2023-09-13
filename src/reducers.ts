import { ACTION_TO_STATE_MAP } from "./actions";
import { PerformanceAction, PerformanceState } from "./types";

export const performanceReducer = (
  state: PerformanceState,
  action: PerformanceAction
): PerformanceState => {
  const stateKey = ACTION_TO_STATE_MAP[action.type];
  return { ...state, [stateKey]: action.payload };
};
