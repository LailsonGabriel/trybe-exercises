const readline = require('readline-sync');

const averageSpeed = (distance, time) => {
  return console.log(`Velocidade Média é de: ${distance / time}`);
};

const distance = readline.questionInt('Qual a distância? (Metros)');
const time = readline.questionInt('Qual tempo? (Segundos)');

averageSpeed(distance, time);
