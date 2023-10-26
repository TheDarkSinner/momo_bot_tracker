const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ["--start-maximized"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  // URL da página da qual você deseja extrair os links
  const url = "https://www.mobox.io/dragonmo/my-pet";

  await page.goto(url);

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const button = await page.waitForXPath("/html/body/div[1]/div/div[2]/div/div[1]/ul/li[2]/span");
  await page.click("#app > div > div.view > div > div.tab-bar > ul > li:nth-child(2) > span");

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const links = await page.$x('//*[@id="app"]/div/div[2]/div/div[3]/div/ul ');

  const extractedLinks = [];
  for (let link of links) {
    const imgTags = await link.$$("img.dragon-icon");
    for (let imgTag of imgTags) {
      const imgSrc = await (await imgTag.getProperty("src")).jsonValue();
      extractedLinks.push(imgSrc);
    }
  }

  const extractedData = {};
  for (let link of extractedLinks) {
    const filename = link.split("/").pop(); // Obter o nome do arquivo da URL
    const fileNumber = filename.match(/\d+/); // Extrair o número do início do nome do arquivo
    if (fileNumber) {
      extractedData[fileNumber[0]] = link;
    }
  }

  console.log(extractedData);

  await browser.close();
})();
