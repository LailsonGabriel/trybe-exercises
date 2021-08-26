function retornaarray(array) {
  let contArray = [];
  let indiceDoMaior = 0;
  for(let valor of array) {
      if(contArray[valor]){                    
        contArray[valor] += 1
      } else {
        contArray[valor] = 1
      }
  }
  for(let index in contArray) {
    if(contArray[index] > contArray[indiceDoMaior] || !contArray[indiceDoMaior]){ 
      indiceDoMaior = index
    } 
  }
  return indiceDoMaior
}


console.log(retornaarray([2, 3, 2, 5, 8, 2, 3]))


//let arai = [2, 3, 2, 5, 8, 2, 3];

//for(let inde in arai) {
  //console.log(arai[inde])
//}