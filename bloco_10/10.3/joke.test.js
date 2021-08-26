const service = require('./joke');
const fetch = require('node-fetch');
jest.mock('node-fetch');

const joke = {
  joke: 'Que piada velha'
}

test('testa requisição da API de Jokes', async () => {
  fetch.mockImplementation( async () => {
    return {
      json : async () => {
        return joke
      }
    }
  });

  const jokeAPI = await service.fetchJoke();

  expect(jokeAPI).toBe('Que piada velha');
})