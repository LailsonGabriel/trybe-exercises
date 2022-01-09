const express = require("express");
const bodyParser = require("body-parser");
const errorMiddleware = require("./errorMiddleware");
const app = express();

app.use(bodyParser.json());

// Rotas(POST) de Registro e Login
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

//Rota(GET) para consultar preço do bitcoin
const bitCointRoute = require("./routes/bitCoinRoute");
app.use("/btc", bitCointRoute);

//Rotas(GET) pega o id
const postRoutes = require("./routes/postRoutes");
app.use("/post", postRoutes);

//Rotas(GET e Post) TeamsRoutes
const teamsRoutes = require("./routes/teamsRoutes");
app.use("/teams", teamsRoutes);

//Caso uma rota passada seja indefinida
app.get("*", (req, res) => {
  return res.status(404).json({ message: "Opsss, route not found!" });
});

// Vai lidar com todos os erros
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log("Aplicação Iniciada");
});
