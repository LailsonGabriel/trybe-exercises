const sum = require('./sum.js');

describe('verifica a function sum', () => {
  test('verificando', () => {
    expect(sum(1, 1)).toBe(2);
  })
})