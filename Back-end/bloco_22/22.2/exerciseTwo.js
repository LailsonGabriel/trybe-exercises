const { exerciseOne } = require("./exerciseOne");

const randomNumber = Math.floor(Math.random() * 100 + 1);

exerciseOne(randomNumber, "randomNumber", randomNumber)
  .then((value) => console.log(value))
  .catch((err) => console.error(err.message));
