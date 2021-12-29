const getRepos = require("./getRepos");

describe('Verifica repositorios na função getRepos', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  it('verificar se existe os repo passados como param', () => {
    return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
      expect(result).toContain('sd-01-week4-5-project-todo-list');
    })
  })
})