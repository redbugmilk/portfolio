const { add, subtract, multiply } = require("./math-operations");

describe("math operation", () => {
  it("should add two values", () => {
    const resultOperation = add(5, 5);
    expect(resultOperation).toBe(10);
  });
  it("should subtract a for b", () => {
    const resultOperation = subtract(1, 2);
    expect(resultOperation).toBe(-1);
  });
  it("should multiply two values", () => {
    const resultOperation = multiply(1, 2);
    expect(resultOperation).toBe(2);
  });
});

describe("math operation throws errors", () => {
  it("throws error if input not number", () => {
    expect(() => add("5", 5)).toThrowError(Error("Inputs should be numbers"));
  });
  it("throws error if input not number", () => {
    expect(() => subtract("a", "b")).toThrowError(
      Error("Inputs should be numbers")
    );
  });
  it("throws error if input not number", () => {
    expect(() => multiply("a", "b")).toThrowError(
      Error("Inputs should be numbers")
    );
  });
});
