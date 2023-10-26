const processItem = function (array) {
  for (const item of array) {
    const { id, realPrice, attribute, star, level, skill1, skill2 } = item;
    const nft = `💸 NEW DRAGON  SOLD !
    Price: ${realPrice / 1e9}
    Attribute: ${attribute}
    Star: ${star}
    Level: ${level}
    Date: ${Date.now().toLocaleString("en-GB", { timeZone: "UTC" })}`;

    return nft;
  }
};

module.exports = { processItem };
