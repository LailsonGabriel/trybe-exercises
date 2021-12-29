const readline = require('readline-sync');

const scripts = [
  { name: 'velocityGame', script: './velocity' },
  { name: 'luckyGame', script: './lucky' },
  { name: 'imc', script: './imc' },
];

const chooseGame = () => {
  scripts.map((game, index) => {
    console.log(`${index} - ${game.name}`);
  });

  const game = readline.questionInt(`Escolha um dos Jogos: `);

  return require(scripts[game].script);
};

chooseGame();
