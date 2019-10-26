//THIS WILL BE THE MAIN INDEX
console.log("SOMETHING HAPPENED");
const config = require("./config");
const services = require("./services")(config);
const express = require("express");
const app = express();

//START SERVER

app.listen(config.express.port, () => {
  services.logger.log(`Server up and listening on port ${config.express.port}`);
});
