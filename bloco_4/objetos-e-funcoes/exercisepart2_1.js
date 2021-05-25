
function palindromo(palavra) {

  for(i = 0; i < palavra.length; i += 1) {
    let ultima = palavra[palavra.length - i - 1]
    if(ultima != palavra[i]) {
      return false;
    }
  }
  return true
}
 


console.log(palindromo('eebelde'))