//exercício 1
// const fatorial = (numero) => {
//   let fatorial = numero;
//   for(let i = numero - 1; i >= 1; i -= 1) {
//     fatorial *= [i]
//   }
//   return `${numero}! = ${fatorial}`
// }

// console.log(fatorial(6))

//exercício 2 

const maiorPalavra = (palavra) => {
  let arrString = palavra.split(" ");
  let maior = 0;
  let maiorPalavra = null;
  arrString.forEach(function(str) {
    console.log(str)
    if (maior < str.length) {
      maior = str.length;
      maiorPalavra = str;
    }
  });
  return maiorPalavra;
}




console.log(maiorPalavra('teu cu é bem lixo seu arrombado'));

