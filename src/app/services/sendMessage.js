require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.token;

const canalId = process.env.channelID;

const sendMessage = (mensagem) => {
  const bot = new TelegramBot(token, { polling: true });

  bot
    .sendMessage(canalId, mensagem)
    .then(() => {
      console.log("Mensagem enviada com sucesso para o canal!");
    })
    .catch((error) => {
      console.error("Erro ao enviar a mensagem:", error);
    });
};

module.exports = { sendMessage };
