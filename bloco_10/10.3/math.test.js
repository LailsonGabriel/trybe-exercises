const service = require('./math');
jest.mock('./math');


test('testa mock de subtrair', () => {
  service.subtrair = jest.fn();

  service.subtrair();
  expect(service.subtrair).toHaveBeenCalled();
})

test('testa mock de multiplicar', () => {
  service.multiplicar = jest.fn().mockReturnValue('10');
  service.multiplicar(2, 5);

  expect(service.multiplicar).toHaveBeenCalled();
  expect(service.multiplicar).toHaveBeenCalledWith(2, 5);
  expect(service.multiplicar()).toBe('10');
})


test('testa a função de soma', () => {
  service.somar.mockImplementation((a, b) => a + b);
  service.somar(2, 2);

  expect(service.somar).toHaveBeenCalled();
  expect(service.somar(2, 2)).toBe(4);
  expect(service.somar).toHaveBeenCalledWith(2, 2);
})

test('testa a função de divisão', () => {
  service.dividir = jest.fn().mockReturnValue('15');
  service.dividir('2', '5');

  expect(service.dividir).toHaveBeenCalled();
  expect(service.dividir()).toBe('15');
  expect(service.dividir).toHaveBeenCalledWith('2', '5');
  expect(service.dividir).toHaveBeenCalledTimes(2);
})


test('função subtrair restaurada', () => {
  service.subtrair = jest.fn().mockReturnValue('20');
  service.subtrair();
  
  expect(service.subtrair).toHaveBeenCalledTimes(1);
  expect(service.subtrair()).toBe('20');
  service.subtrair.mockRestore();
  expect(service.subtrair()).toBe(undefined);
  expect(service.subtrair).toHaveBeenCalledTimes(1);
})