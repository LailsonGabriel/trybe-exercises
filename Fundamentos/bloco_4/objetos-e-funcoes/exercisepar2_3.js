
function indiceDoMaior(numeros) {
  
  let maiorNumero = 0;
  for(let index in numeros) {
    if(numeros[maiorNumero] > numeros[index]) {
      maiorNumero = index;
    }
  }
  return maiorNumero;
}


console.log(indiceDoMaior([2, 4, 6, 7, 10, 0, -3]));