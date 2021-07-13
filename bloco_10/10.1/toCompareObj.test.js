const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};


test('obj1 not equal obj2', () => {
  expect(Object.entries(obj1)).not.toEqual(Object.entries(obj2));
})

test('obj2 not equal obj3', () => {
  expect(Object.entries(obj2)).not.toEqual(Object.entries(obj3));
})

test('', () => {
  expect(obj3).not.toEqual(obj1)
})

