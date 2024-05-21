const express = require("express");
const axios = require("axios");
const { processItem } = require("../processItem");
const { sendMessage } = require("../sendMessage");

const app = express();
const port = 3000;

const url = "https://nftapi.mobox.io/auction/logs_new?&page=1&limit=50";

let previousData = [];
let currentData = [];
let newItens = [];
let SetOfIds = new Set();

async function fetchData() {
  try {
    const response = await axios.get(url);
    previousData = currentData;
    currentData = response.data.list;
    console.log("Dados atualizados com sucesso.");

    SetOfIds = new Set(
      previousData.map((item) => {
        if (item.ids.length === 0 && item.tokens[0].tokenId) {
          return item.tokens[0].tokenId;
        } else if (item.ids.length > 0) {
          return parseInt(item.ids[0]);
        }
      })
    );

    if (previousData.length > 0) {
      for (let item of currentData) {
        if (!SetOfIds.has(parseInt(item.ids[0]) || item.tokens[0].tokenId)) {
          newItens.push(item);
        }
      }
    }

    if (newItens.length > 0) {
      const [message, url] = processItem(newItens);

      const ids = newItens.map((item) => {
        if (item.ids.length === 0 && item.tokens[0].tokenId) {
          return item.tokens[0].tokenId;
        } else if (item.ids.length > 0) {
          return parseInt(item.ids[0]);
        }
      });

      console.log("Novos itens encontrados:", ids);
      if (message.length > 0 && url.length > 0) sendMessage(message, url);
      newItens = [];
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

// app.get("/", (req, res) => {
//   res.json(currentData);
// });

// app.listen(port, () => {
//   fetchData();
//   console.log(`Servidor escutando na porta ${port}`);
// });

module.exports = { fetchData };
