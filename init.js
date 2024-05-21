const { fetchData } = require("./src/services/listen");

setInterval(fetchData, 60000);
