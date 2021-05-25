function consultaNomes(nomes) {
  let maiorNome;
  for(let index in nomes) {
    if (nomes[index] > nomes[index + 1]) {
      maiorNome = nomes[index]
    }
    
  }
  return maiorNome;
} 

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Lailson']))