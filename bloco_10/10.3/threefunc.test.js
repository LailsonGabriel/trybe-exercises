const service = require("./threefunc");

jest.mock('./threefunc');


describe('adiciona uma nova implementação a função upperCase', () => {
  it('ao passar um parâmetro CARRO irá retornar carro', () => {
    service.upperCase.mockImplementation((string) => string.toLowerCase());
    service.upperCase('CARRO');

    expect(service.upperCase).toHaveBeenCalled();
    expect(service.upperCase('CARRO')).toMatch('carro');
    expect(service.upperCase).toHaveBeenCalledTimes(2)
  })
})

describe('a função firstCaracter pega a primeira letra da string passada como parâmetro', () => {
  it('implementação na função, vai pegar a última letra da string', () => {
    service.firstCaracter.mockImplementation((string) => string.slice(-1));
    service.firstCaracter('FUSCA TSI');

    expect(service.firstCaracter).toHaveBeenCalled();
    expect(service.firstCaracter('JETTA')).toBe('A');
    expect(service.firstCaracter).toHaveBeenCalledTimes(2);
  })
})

describe('a função concatString concatena 2 string passadas como parâmetro', () => {
  it('a implementação vai retornar a concatenação de 3 strings', () => {
    service.concatString.mockImplementation((str1, str2, str3) => str1+str2+str3);
    service.concatString('drift', 'is', 'life');

    expect(service.concatString).toHaveBeenCalled();
    expect(service.concatString('ge', 'ta', 'way')).toBe('getaway');
  })
});

