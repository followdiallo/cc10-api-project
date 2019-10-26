//const config = require("./config");
//const services = require("./services")(config);
//const express = require("express");
//const app = express();

//START SERVER
const { setupExpressServer } = require("./server");

const PORT = process.env.PORT || 3000;
const app = setupExpressServer();
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

// app.listen(config.express.port, () => {
//   services.logger.log(`Server up and listening on port ${config.express.port}`);
// });
