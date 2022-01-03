const fs = require("fs").promises;

async function getCharacters(url) {
  return await fs.readFile(url).then((content) => JSON.parse(content));
}

const getAllPersons = async () => {
  const simpsons = await getCharacters("./simpsons.json");

  try {
    const allSimpsons = simpsons.map(({ id, name }) => `${id} - ${name}`);
    console.log(allSimpsons);
  } catch (e) {
    console.error(e);
  }
};

const getPersonsByID = async (id) => {
  const simpsons = await getCharacters("./simpsons.json");
  const result = simpsons.find((simpson) => simpson.id === id);
  if (!result) throw new Error("Não encontrado");
  console.log(result);
};

const deleteCharacters = async () => {
  const simpsons = await getCharacters("./simpsons.json");
  const result = simpsons.filter(({ id }) => id !== "10" && id !== "6");
  await fs.writeFile("./simpsons.json", JSON.stringify(result));
};

const insertCharactes = async () => {
  const simpsons = await getCharacters("./simpsons.json");
  const newCharacters = simpsons.filter(({ id }) =>
    [1, 2, 3, 4].includes(Number(id))
  );
  await fs.writeFile("./simpsonFamily.json", JSON.stringify(newCharacters));
};

const addPerson = async () => {
  const simpsons = await getCharacters("./simpsonFamily.json");
  simpsons.push({ id: "8", name: "Nelson Muntz" });
  await fs.writeFile("./simpsonFamily.json", JSON.stringify(simpsons));
};

const changePerson = async () => {
  const simpsons = await getCharacters("./simpsonFamily.json");
  const changed = simpsons.map((simpson) => {
    if (simpson.name === "Nelson Muntz") simpson.name = "Maggie Simpson";
    return simpson;
  });
  console.log(changed);
  //   await fs.writeFile("./simpsonFamily.json", JSON.stringify(changed));
};

changePerson();
