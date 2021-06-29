const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, crr) => {
    console.log(crr.indexOf('a'))
  }, 0)
}
console.log(containsA())
//assert.deepStrictEqual(containsA(), 20);