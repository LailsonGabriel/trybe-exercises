const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// Rotas(POST) de Registro e Login
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

//Rota(GET) para consultar preço do bitcoin
const bitCointRoute = require("./routes/bitCoinRoute");
app.use("/btc", bitCointRoute);

app.listen(8080, () => {
  console.log("Aplicação Iniciada");
});
