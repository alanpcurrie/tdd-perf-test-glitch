import { perfTest, perfTestEval } from "../perf-test";
import { getCondition } from "../condition-map";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../condition-map");

describe("Performance Utilities", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("perfTest returns result in expected format and calls getCondition", () => {
    (getCondition as jest.Mock).mockReturnValue(true); // Mocking the getCondition function

    const result = perfTest();

    expect(result).toHaveProperty("perfResult");
    expect(typeof result.perfResult).toBe("number");
    expect(getCondition).toHaveBeenCalledWith(expect.any(Object));
  });

  it("perfTest uses default condition count when not provided", () => {
    perfTest();

    const expectedConditionsCount = 10_000;
    expect(
      Object.keys((getCondition as jest.Mock).mock.calls[0][0]).length
    ).toBe(expectedConditionsCount);
  });

  it("perfTestEval returns result in expected format and calls provided callback", () => {
    const mockCallback = jest.fn().mockReturnValue(true);

    const result = perfTestEval(mockCallback);

    expect(typeof result).toBe("number");
    expect(mockCallback).toHaveBeenCalledWith(expect.any(Object));
  });

  it("perfTestEval uses default condition count when not provided", () => {
    const mockCallback = jest.fn().mockReturnValue(true);

    perfTestEval(mockCallback);

    const expectedConditionsCount = 10_000;
    expect(Object.keys(mockCallback.mock.calls[0][0]).length).toBe(
      expectedConditionsCount
    );
  });
});
