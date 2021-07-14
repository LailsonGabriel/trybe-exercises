function hydrate(string) {
  let numberOfDrinks = string.match(/\d+/g);
  let counter = 0;
  for (let index = 0; index < numberOfDrinks.length; index += 1) {
    counter += Number(numberOfDrinks[index]);
  }
  if (counter === 1) {
    return '1 copo de água';
  }
  return counter + ' copos de água';
}

console.log(hydrate('1 cerveja, 2 shots e 1 catuaba'));


module.exports = hydrate;