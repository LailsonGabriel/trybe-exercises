const { getUserName, findUserById } = require("./finduser");

describe('Caso o user seja encontrado pelo id', () => {
  it('retorna o nome do user', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toMatch('Mark');
  })
  it('retorna um erro', () => {
    expect.assertions(1);
    return expect(getUserName(7)).rejects.toEqual({ error: 'User with 7 not found.' });
  })
})