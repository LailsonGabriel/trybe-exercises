const myRemoveWithoutCopy = require("./myRemoveWithoutCopy");

describe('the function takes an array and an item and returns the array itself without the item', () => {
  test('myRemoveWithoutCopy([1, 2, 3, 4], 3) return [1, 2, 4}', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  test('myRemoveWithoutCopy([1, 2, 3, 4], 3) dont return [1, 2, 4}', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  test('myRemoveWithoutCopy([1, 2, 3, 4]) return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  });
  test('myRemoveWithoutCopy([1, 2, 3, 4], 5) return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})