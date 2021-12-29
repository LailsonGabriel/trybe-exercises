const myFizzBuzz = require("./myFizzBuzz");

test('myFizzBuzz(15) return fizzbuzz', () => {
  expect(myFizzBuzz(15)).toEqual('fizzbuzz');
})

test('myFizzBuzz(3) return fizz', () => {
  expect(myFizzBuzz(6)).toMatch('fizz');
})

test('myFizzBuzz(10) return buzz', () => {
  expect(myFizzBuzz(10)).toMatch('buzz');
})

test('myFizzBuzz(22) return fizz', () => {
  expect(myFizzBuzz(22)).toBe(22);
})

test('myFizzBuzz(not number) return false', () => {
  expect(myFizzBuzz('ola')).toBeFalsy();
})




