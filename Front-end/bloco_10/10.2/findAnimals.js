const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise ( async (resolve, reject) => {
    const animalName = await Animals.find((valor) => valor.name === name);
    if(animalName === undefined) return reject({ error: 'Não possui um animal com esse nome.' });
    return resolve(animalName)
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then((result) => result)
};
console.log(getAnimal('Soneca').then(result => console.log(result)))
module.exports = { findAnimalByName, getAnimal };