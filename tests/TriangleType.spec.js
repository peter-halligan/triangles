const TriangleType = require('../lib/TriangleType');

describe('Triangle Type checker ', () => {
  test('should be defined', () => {
    expect(TriangleType).toBeDefined();
  });

  test('should identify an equilateral triangle if all sides are even', async () => {
    expect.assertions(1);
    const response = await TriangleType(1, 1, 1);
    expect(response).toBe('equilateral');
  });

  test('should identify an scalene triangle if all sides are not equal', async () => {
    expect.assertions(1);
    const response = await TriangleType(1, 2, 3);
    expect(response).toBe('scalene');
  });

  test('should identify an isosceles triangle if 2 sides, a & b are equal', async () => {
    expect.assertions(1);
    const response = await TriangleType(1, 1, 3);
    expect(response).toBe('isosceles');
  });

  test('should identify an isosceles triangle if 2 sides, a & c are equal', async () => {
    expect.assertions(1);
    const response = await TriangleType(1, 3, 1);
    expect(response).toBe('isosceles');
  });

  test('should identify an isosceles triangle if 2 sides, b & c are equal', async () => {
    const response = await TriangleType(3, 1, 1);
    expect(response).toBe('isosceles');
  });

  test('should return an error if not provided with 3 args', async () => {
    expect.assertions(1);
    const err = new Error('not_enough_arguments');
    try {
      await TriangleType(3, 1);
    } catch (e) {
      expect(e).toEqual(err);
    }
  });

  test('should return an error if an arg is undefined', async () => {
    expect.assertions(1);
    const err = new Error('not_enough_arguments');
    try {
      await TriangleType(3, 1, undefined);
    } catch (e) {
      expect(e).toEqual(err);
    }
  });

  test('should return an error if an arg is null', async () => {
    expect.assertions(1);
    const err = new Error('not_enough_arguments');
    try {
      await TriangleType(null, 1, 1);
    } catch (e) {
      expect(e).toEqual(err);
    }
  });

  test('should return an error if a side is 0', async () => {
    expect.assertions(1);
    const err = new Error('not_enough_arguments');
    try {
      await TriangleType(0, 1, 1);
    } catch (e) {
      expect(e).toEqual(err);
    }
  });

  test('should return an error not a number is passed in', async () => {
    expect.assertions(1);
    const err = new Error('not_enough_arguments');
    try {
      const response = await TriangleType(NaN, 1, 1);
      expect(response).toBeNull();
    } catch (e) {
      expect(e).toEqual(err);
    }
  });

  test('should return equilateral if a string and 2 numbers of equal length are supplied ', async () => {
    expect.assertions(1);
    const response = await TriangleType('1', 1, 1);
    expect(response).toBe('equilateral');
  });

  test('should return equilateral if a 2 strings and a numbers of equal length are supplied ', async () => {
    expect.assertions(1);
    const response = await TriangleType('1', '1', 1);
    expect(response).toBe('equilateral');
  });

  test('should return an error if string with a value of zero is passed ', async () => {
    expect.assertions(1);
    const err = new Error('invalid_arguments');
    try {
      const response = await TriangleType('0', 1, 1);
      expect(response).toBeNull();
    } catch (e) {
      expect(e).toEqual(err);
    }
  });
});
