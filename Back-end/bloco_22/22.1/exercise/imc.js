const readline = require('readline-sync');

const calcularIMC = (weight, height) => {
  const resultIMC = weight / (height * height);
  console.log(`IMC: ${resultIMC}`);
  if (resultIMC < 18.5) return console.log('Abaixo do peso (magreza)');
  if (resultIMC >= 18.5 && resultIMC <= 24.9) return console.log('Peso normal');
  if (resultIMC >= 25 && resultIMC <= 29.9)
    return console.log('Acima do peso (sobrepeso)');
  if (resultIMC >= 30 && resultIMC <= 34.9)
    return console.log('Obesidade grau I ');
  if (resultIMC >= 35 && resultIMC <= 39.9)
    return console.log('Obesidade grau II');
  if (resultIMC > 40) return console.log('Obesidade graus III e IV');
};

const weight = readline.questionFloat('Whats your weight?');
const height = readline.questionFloat('Whats your height?');

calcularIMC(weight, height);
