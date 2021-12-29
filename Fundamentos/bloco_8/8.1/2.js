const num = () => {
  const numero = Math.random() * 5;
  return Math.ceil(numero)
}

const lucky = () => {
  const numero = Math.random() * 5;
  return Math.ceil(numero)
}

const sorteio = (num, lucky) => {
  if(num === lucky) {return 'Parabéns você ganhou'};
  return 'Tente Novamente';
}

console.log(sorteio(num(), lucky()));