function techList(array, name) {
  let tree = [];
  array = array.sort();
  array.forEach((valor) => tree.push({ tech: valor, name: name }))
  if (tree.length === 0) return 'Vazio!';
  return tree;
}

console.log(techList([], 'Lailson'))

module.exports = techList;