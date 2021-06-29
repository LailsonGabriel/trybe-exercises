const assert = require('assert');

// escreva sum abaixo
function sum(...numbers) {
  let soma = 0;
  numbers.forEach((valor) => soma += valor);
  return soma
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);