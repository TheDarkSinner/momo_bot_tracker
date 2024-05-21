const { fetchData } = require("./src/services/listen");

fetchData();
setInterval(fetchData, 60000);
