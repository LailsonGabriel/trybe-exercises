const { findUserById, getUserName } = require("./finduser");

describe('Ao usar a função getUserName com id passado como parametro', () => {
  it('vai me retornar o nome do user', async () => {
    await expect(getUserName(4)).resolves.toBe('Mark');
  })
  it('vai me retornar o nome do user', async () => {
    await expect(getUserName(5)).resolves.toBe('Paul');
  })
})


describe('Quando o id não existe', () => {
  test('retorna um erro', async () => {
    await expect(getUserName(7)).rejects.toEqual({ error: 'User with 7 not found.' })
  })
})