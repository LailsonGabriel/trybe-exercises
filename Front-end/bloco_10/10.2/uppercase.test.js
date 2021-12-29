const uppercase = require("./uppercase");

it('deve retornar a string do parametro com letras maiúsculas', () => {
  uppercase('lailson', (result) => {
    expect(result).toMatch('LAILSON');
  })
})