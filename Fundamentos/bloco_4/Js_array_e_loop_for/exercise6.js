let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let div;
let resultsdiv = 0;

for (let soma = 0; soma < numbers.length; soma += 1) {
  if(numbers[soma] % 2 !== 0) {
    resultsdiv += 1
  }
}

if (resultsdiv === 0) {
  console.log("nenhum valor ímpar encontrado")
} else {
  console.log(resultsdiv)
}