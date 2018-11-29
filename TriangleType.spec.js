const TriangleType = require("./TriangleType");

test("should be defined", () =>{
  expect(TriangleType).toBeDefined();
});

test("should identify an equilateral triangle if all sides are even", () => {
  expect(TriangleType(1, 1, 1)).toBe("equilateral");
});

test("should identify an scalene triangle if all sides are not equal", () => {
  expect(TriangleType(1, 2, 3)).toBe("scalene");
});

