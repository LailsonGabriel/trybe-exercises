const sum = require('./sum.js');

describe('testing function sum returns the correct Values', () => {
  test('tests if sum(4, 5) return is 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('tests if sum(0, 0) return is 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('tests if sum return a erro when a parameter is equal to a string', () => {
    expect(() => {
      sum(1, '3');
    }).toThrow();
  });
  test('tests if sum return a erro when a parameter is equal to a string', () => {
    expect(() => {
      sum(1, '3');
    }).toThrow(/parameters must be numbers/);
  });
})