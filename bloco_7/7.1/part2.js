//exercício 1
const fatorial = (numero) => {
  let fatorial = numero;
  for(let i = numero - 1; i >= 1; i -= 1) {
    fatorial *= [i]
  }
  return numero + '! = ' + fatorial
}

console.log(fatorial(6))


