const express = require("express");
const axios = require("axios");
const { processItem } = require("./services/processItem");
const { sendMessage } = require("./services/sendMessage");

const app = express();
const port = 3000;

const url = "https://dragonmo.mobox.io/dragon_auction/logs";

let previousData = [];
let currentData = [];
let newItens = [];
let Ids = new Set();

async function fetchData() {
  try {
    const response = await axios.get(url);
    previousData = currentData;
    currentData = response.data.data.list;
    console.log("Dados atualizados com sucesso.");

    Ids = new Set(previousData.map((item) => item.id));

    if (previousData.length > 0) {
      for (let item of currentData) {
        if (!Ids.has(item.id)) {
          newItens.push(item);
        }
      }
    }

    if (newItens.length > 0) {
      const [message, url] = processItem(newItens);
      const ids = newItens.map((item) => item.id);
      console.log("Novos itens encontrados:", ids);
      sendMessage(message, url);
      newItens = [];
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

app.get("/", (req, res) => {
  res.json(currentData);
});

setInterval(fetchData, 60000);

app.listen(port, () => {
  fetchData();
  console.log(`Servidor escutando na porta ${port}`);
});
