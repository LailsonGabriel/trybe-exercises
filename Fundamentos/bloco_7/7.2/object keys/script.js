const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const infoEstudant = (estudante) => {
  const array = Object.keys(estudante);
  const array2 = Object.values(estudante)
  for(index in array) {
    console.log(`${array[index]} Nivel: ${array2[index]}`)
  }
}

infoEstudant(student2)