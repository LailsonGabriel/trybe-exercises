let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let maior = 0;

for (let soma = 0; soma < numbers.length; soma += 1) {
  if(numbers[soma] > maior) {
    maior =+ numbers[soma]
  }
}

console.log(maior)