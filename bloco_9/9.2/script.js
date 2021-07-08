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
  if(number < 8000) resolve([number / 2, number / 3, number /  5, number / 10]);
  reject();
})
.then(result => console.log(result))
.catch(erro => console.log('É MAIS DE OITO MILLL'))