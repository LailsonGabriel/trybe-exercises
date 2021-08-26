function consultaNomes(nomes) {
  let maiorNome = nomes[0];
  for(let index in nomes) {
      if(maiorNome.length < nomes[index].length ) {
        maiorNome = nomes[index]
      }
    
  }
  return maiorNome;
} 

console.log(consultaNomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))