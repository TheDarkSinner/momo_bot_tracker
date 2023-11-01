require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.token;
const canalId = process.env.channelID;

let bot = new TelegramBot(token, { polling: true, timeout: 60000 * 15 });

bot.on("polling_error", (error) => {
  console.error("Erro no polling:", error);
  console.log("\n", error.response.statusMessage, "\n");
});

const sendMessage = async (messages, images) => {
  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    const image = images[i];

    bot
      .sendPhoto(canalId, image, { caption: message, parse_mode: "Markdown" })
      .then(() => {
        console.log("Mensagem enviada com sucesso.");
      })
      .catch((error) => {
        console.error("Erro ao enviar a mensagem:", error);
      });
  }
};

module.exports = { sendMessage };
