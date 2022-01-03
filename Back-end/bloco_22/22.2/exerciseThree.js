const { exerciseOne } = require("./exerciseOne");

const randomNumber = Math.floor(Math.random() * 100 + 1);

const executeFunction = async () => {
  try {
    const result = await exerciseOne(randomNumber, randomNumber, randomNumber);
    console.log(result);
  } catch (e) {
    console.error("ERRORRR: ", e.message);
  }
};

executeFunction();
