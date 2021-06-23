const contratar = (pessoa) => {
  let lowerCase = pessoa.toLowerCase();
  let resultado = lowerCase.split(' ');
  return {
    nome: pessoa,
    email: `${resultado.join('_')}@trybe.com`,
  }
}

const newEmployees = (chamar) => {
  const employess = {
    id1: chamar('Lailson Gabriel Vieira'),
    id2: chamar('Pedro Bezerra Nascimento'),
    id3: chamar('Jacinto Pinto')
  }
  return employess
}

console.log(newEmployees(contratar))