const random = require("./randomNumber");
jest.mock('./randomNumber');

describe('when calling the function', () => {
  it('return a number', () => {
    random.randomNumber = jest.fn().mockReturnValue(25);

    random.randomNumber();

    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber()).toBe(25);
    expect(random.randomNumber).toHaveBeenCalledTimes(2)
  })
})

describe('implementação na função randomNumber', () => {
  it('return 1 param / 2 param', () => {
    random.randomNumber.mockReset();
    random.randomNumber.mockImplementation((a, b) => a / b);
    random.randomNumber(2, 4);

    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber(4, 2)).toBe(2);
    expect(random.randomNumber).toHaveBeenCalledTimes(2);
  })
})

describe('implementa um novo mock na função 3 param multiplicados', () => {
  it('retornar 1 param * 2 param * 3 param', () => {
    random.randomNumber.mockImplementation((a, b, c) => a * b * c);
    random.randomNumber(2, 2, 2);

    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber(2, 3, 2)).toBe(12);
  })

  it('reseta a função e implementa uma nova função', () => {
    random.randomNumber.mockReset();
    random.randomNumber.mockImplementation((a) => a * 2);
    random.randomNumber(5);

    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber(10)).toBe(20)
  })
})