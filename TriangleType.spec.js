const TriangleType = require("./TriangleType");

test("should be defined", () => {
  expect(TriangleType).toBeDefined();
});

test("should identify an equilateral triangle if all sides are even", async () => {
  expect.assertions(1);
  const response = await TriangleType(1, 1, 1);
  expect(response).toBe("equilateral");

});

test("should identify an scalene triangle if all sides are not equal", async () => {
  expect.assertions(1);
  const response = await TriangleType(1, 2, 3);
  expect(response).toBe("scalene");
});

test("should identify an isosceles triangle if 2 sides are equal", async () => {
  expect.assertions(1);
  const response = await TriangleType(1, 1, 3);
  expect(response).toBe("isosceles");
});

test("should identify an isosceles triangle if 2 sides are equal", async () => {
  expect.assertions(1);
  const response = await TriangleType(1, 3, 1);
  expect(response).toBe("isosceles");

});

test("should identify an isosceles triangle if 2 sides are equal", async () => {
  const response = await TriangleType(3, 1, 1);
  expect(response).toBe("isosceles");
});

test("should return an error if not provided with 3 args", async () => {
  expect.assertions(1);
  try {
    await TriangleType(3, 1);
  } catch (e) {
    expect(e).toMatch("not_enough_arguments");
  }

});

test("should return an error if an arg is undefined", async () => {
  expect.assertions(1);
  try {
    await TriangleType(3, 1, undefined);
  } catch (e) {
    expect(e).toMatch("not_enough_arguments");
  }

});

test("should return an error if an arg is null", async () => {
  expect.assertions(1);
  try {
    await TriangleType(null, 1, 1);
  } catch (e) {
    expect(e).toMatch("not_enough_arguments");
  }

});

test("should return an error if a side is 0", async () => {
  expect.assertions(1);
  try {
    await TriangleType(0, 1, 1);
  } catch (e) {
    expect(e).toMatch("not_enough_arguments");
  }

});
