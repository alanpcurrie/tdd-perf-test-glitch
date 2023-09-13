import { getCondition } from "./condition-map";
import { ConditionEvaluator } from "./types";

export const perfTest = (condition: number = 10_000) => {
  const start = performance.now();
  const conditions = Array(condition)
    .fill(false)
    .reduce((acc, _, index) => {
      acc[`key-${index}`] = false;
      return acc;
    }, {});
  getCondition(conditions);

  const end = performance.now();
  return {
    perfResult: end - start
  };
};

export const perfTestEval = (
  cb: ConditionEvaluator,
  condition: number = 10_000
) => {
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
