const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// Rotas de Registro e Login
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

app.listen(8080, () => {
  console.log("Aplicação Iniciada");
});
