const myRemove = require('./myremove.js');


describe('function myRemove takes an array and an item and removes the item from the array', () => {
  test('myRemove([1, 2, 3, 4], 3), return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('myRemove([1, 2, 3, 4], 3) dont return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('previous matriz by parameter did not change', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  test('myRemove([1, 2, 3, 4], 5) return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})