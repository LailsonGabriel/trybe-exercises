const express = require("express");
const app = express();
const port = 3030;
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/error");

const CEP = require("./controllers/Cep");

app.use(bodyParser.json());

app.get("/ping", (req, res) => res.status(200).send({ message: "pong!" }));

app.use("/cep", CEP);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
