const service = require("./dogPictures");

describe('ao chamar a função dogPic faz a requisição a Api', () => {
  service.dogPic = jest.fn();
  afterEach(service.dogPic.mockReset)

  it('função dogPic mockada vai passar', async () => {
    service.dogPic.mockResolvedValue('request sucess');

    service.dogPic();
    expect(service.dogPic).toHaveBeenCalled();
    expect(service.dogPic).toHaveBeenCalledTimes(1);
    expect(service.dogPic()).resolves.toBe('request sucess');
    expect(service.dogPic).toHaveBeenCalledTimes(2);
  });

  it('função dogPic mockada vai passar', async () => {
    service.dogPic.mockRejectedValue('request failed');

    expect(service.dogPic).toHaveBeenCalledTimes(0);
    expect(service.dogPic()).rejects.toBe('request failed');
    expect(service.dogPic).toHaveBeenCalledTimes(1);
  })

})