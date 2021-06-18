const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

// console.log(oddsAndEvens);


const arrayNumbers = (array) => {
  //Tenho que pegar o primeiro num
  // verificar se ele é maior que o proximo
  // vou armazenar
  let numbersArray = array;
  let number = array[0];
  let guardarArray = [];
  for(let i = 1; i < numbersArray.length; i += 1) {
    if(numbersArray[i] < number) {
      number = numbersArray[i];
    }
  }
return number
}
console.log(arrayNumbers(oddsAndEvens));
