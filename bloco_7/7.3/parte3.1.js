const greetPeople = (people) => {
  let greeting = 'Hello ';
  let output = []
  for (const person in people) {
    output.push(greeting + people[person]);
  }

  return output;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const assert = require('assert');

assert.deepStrictEqual(greetPeople(parameter), result)
assert.deepStrictEqual(greetPeople(['Lailson', 'Larissa', 'Jucineide']), ['Hello Lailson', 'Hello Larissa', 'Hello Jucineide'])