const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arrayNumber) => {
  let output = 0;
  for(let i = 0; i < arrayNumber.length; i += 1) {
    output += arrayNumber[i];
  }
  return output
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);