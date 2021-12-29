const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'D', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const array1 = ['A', 'A', 'A', 'A', 'A'];
const array2 = ['A', 'A', 'A', 'A', 'A',];

const correction = (correto, estudante) => {
  let pontos = 0;
  for(let i = 0; i < correto.length; i+= 1) {
    if(correto[i] === estudante[i]) { pontos += 1;}
    else { pontos -= 0.5;};
  }
  return pontos
}

const resultadoDasProvas = (gabarito, resposta, correction) => {
  console.log(`Gabarito: ${gabarito}
  Resposta do Estudante: ${resposta}
  Nota: ${correction}`
  )
}


console.log(resultadoDasProvas(rightAnswers, studentAnswers, correction()))
