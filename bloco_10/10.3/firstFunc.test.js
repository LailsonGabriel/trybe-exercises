const service = require('./threefunc');

describe('adiciona uma nova implementação a função upperCase', () => {
  it('ao passar um parâmetro CARRO irá retornar carro', () => {
    const firstFunc = jest
    .spyOn(service, 'upperCase')
    .mockImplementation((string) => string.toLowerCase());
    
    firstFunc('CARRO');
    expect(firstFunc).toHaveBeenCalled();
    expect(firstFunc('CARRO')).toMatch('carro');
    expect(firstFunc).toHaveBeenCalledTimes(2);

    service.upperCase.mockRestore();

    expect(service.upperCase('carro')).toBe('CARRO');
  });
});

