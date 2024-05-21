const moment = require("moment");
const urls = require("./urls.json");

const processItem = function (array) {
  const itensList = [];
  const imgsList = [];

  for (const item of array) {
    let { ids, tokens, bidPrice, tx } = item;

    if (tokens[0] && ids.length === 0) {
      for (const nft of tokens) {
        const { tokenId, quality, category, level, specialty, hashrate, lvHashrate, prototype } = nft;

        const currentDate = moment().utc();
        const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss [UTC]");

        const imgKey = Object.keys(urls).find((x) => x == prototype);

        let rarity = parseInt(String(prototype)[0]);

        switch (rarity) {
          case 4:
            rarity = "🟣";
            break;
          case 5:
            rarity = "🟠";
            break;
          case 6:
            rarity = "🔴";
            break;
        }

        let categoryIcon;

        switch (category) {
          case 1:
            categoryIcon = "🦅 Wind";
            break;
          case 2:
            categoryIcon = "🐾 Earth";
            break;
          case 3:
            categoryIcon = "🐟 Water";
            break;
          case 4:
            categoryIcon = "👹 Creature";
            break;
          case 5:
            categoryIcon = "🤖 Human";
            break;
        }

        const nftDetails = `
  💸 NEW MOMO SOLD !
  Price: ${bidPrice / 1e9} USDT
  Rarity: ${rarity}
  Element: ${categoryIcon}
  Level: ${level}
  Initial Hash: ${hashrate}
  Hashrate: ${lvHashrate}
  Date: ${formattedDate}
  
  🔎 - [Hash](https://bscscan.com/tx/${tx})`;

        itensList.push(nftDetails);
        imgsList.push(urls[imgKey]);
      }
    } else {
      continue;
    }
  }

  return [itensList, imgsList];
};

module.exports = { processItem };
