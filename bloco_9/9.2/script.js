const randomNumbers = (numberCounter) => {
  let array = [];
  let resultado = 0;
  for (let i = 0; i   < numberCounter; i += 1) {
    let numero = Math.round(Math.random() * 50)
    numero *= numero
    array.push(numero);
  }
  array.forEach((number) => resultado += number) 
  return resultado
}

const numbers = new Promise((resolve, reject) => {
  const number = randomNumbers(10);
  console.log(number)
  if(number < 8000) resolve();
  reject();
})
.then(result => console.log('Promise resolvida'))
.catch(erro => console.log('Promise rejeitada'))
