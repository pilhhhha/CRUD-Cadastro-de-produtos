const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios"); //é o responsavel por enviar os eventos para os outros microserviços

const app = express();
app.use(bodyParser.json());

app.post("/eventos", (req, res) => {
  const evento = req.body;

  //envia o evento para o microserviço de produtos
  axios.post("http://localhost:3000/eventos", evento);

  //envia o evento para o microserviço de pedidos
  axios.post("http://localhost:4000/eventos", evento);

    //envia o evento para o microserviço de clientes
  axios.post("http://localhost:5000/eventos", evento);

  res.status(200).send({ msg: "ok" });
});



app.listen(10000, () => {
  console.log("Barramento de evento. Porta 10000");
});