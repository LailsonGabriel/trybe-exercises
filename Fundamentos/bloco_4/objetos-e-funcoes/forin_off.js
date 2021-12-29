let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let boasvindas in names) {
  console.log('Olá ' + names[boasvindas])
}

console.log('    ')


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let consulta in car) {
  console.log(consulta, car[consulta])
}
