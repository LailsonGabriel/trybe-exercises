const { encode, decode } = require("./first");

describe('are encode and decode a function?', () => {
  test('enconde its a function?', () => {
    expect(encode('aeiou')).toBeDefined();
  });
  test('decode its a function?', () => {
    expect(decode('12345')).toBeDefined();
  });
})

describe('encode and decode function', () => {
  test('encode(aeiou) return 12345', () => {
    expect(encode('aeiou')).toMatch('12345');
  });
  test('decode(12345) return aeiou', () => {
    expect(decode('12345')).toMatch('aeiou');
  });
  test('encode(ghjkl) not return 12345', () => {
    expect(encode('ghjkl')).not.toMatch('12345');
  });
  test('decode(67890) not return aeiou', () => {
    expect(decode('67890')).not.toMatch('aeiou');
  });
})

describe('enconde and docede length', () => {
  test('encode(aeiou) length equal 5', () => {
    expect(encode('aeiou').length).toBe(5);
  })
  test('decode(12345) length equal 5', () => {
    expect(decode('12345').length).toBe(5);
  })
})

