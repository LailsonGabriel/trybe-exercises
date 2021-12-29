const readline = require('readline-sync');

const randomNumber = Math.floor(Math.random() * 10);

const realOrWrong = (userNumber) => {
  return console.log(
    randomNumber === userNumber
      ? 'Parabéns, número correto!'
      : `"Opa, não foi dessa vez. O número era ${randomNumber}"`,
  );
};

const runGame = () => {
  const number = readline.questionInt('Digite um número entre 0 a 10: ');
  realOrWrong(number);
  const again = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) ',
  );
  if (again !== 's') return console.log('Até a próxima!');
  runGame();
};

runGame();
