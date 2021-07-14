const searchEmployee = require("./searchemployee");

describe('Testa se a função foi definida', () => {
  test('a função foi definida?', () => {
    expect(searchEmployee).toBeDefined();
  });
})

describe('Testa se a função está funcionando', () => {
  test('testa se searchEmployee(4678-2, firstName) retorna Paul', () => {
    expect(searchEmployee('4678-2', 'firstName')).toMatch('Paul');
  });
  test('testa se searchEmployee(4678-2, lastName) retorna Dodds', () => {
    expect(searchEmployee('4678-2', 'lastName')).toMatch('Dodds');
  });
  test('testa se searchEmployee(4678-2, specialities) retorna [Backend]', () => {
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });
})

describe('Testa os erros', () => {
  test('testa se searchEmployee(34322) retorna ID não identificada', () => {
    expect(() => {
      searchEmployee('34322');
    }).toThrow(/ID não identificada/);
  })
  test('testa se searchEmployee(4678-2, carro) retorna Informação indisponível', () => {
    expect(() => {
      searchEmployee('4678-2', 'carro')
    }).toThrow(/Informação indisponível/);
  })
})