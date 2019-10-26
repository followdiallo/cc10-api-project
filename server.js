//SOMETHING WILL HAPPEN HERE

const express = require("express");
const setupExpressServer = () => {
  const app = express();

  //PUT METHODS HERE

  //   app.get("/teapot", (req, res) => {
  //     res.status(418).end();
  //     //res.sendStatus(418);
  //   });

  //   app.get("/hello", (req, res) => {
  //     res.send("world");
  //   });

  //   app.get("/hellojson", (req, res) => {
  //     res.json({ hello: "world" });
  //     //res.send would also return a json;
  //     //it looks at what you're sending and tried to
  //     //send the appropriate type
  //   });

  //   app.get("/greet", (req, res) => {
  //     // const name = req.query.name
  //     // line 24 is same as line 22
  //     const { name } = req.query;
  //     res.send(`Hello ${name}!`);
  //   });

  //   app.get("/:first/plus/:second", (req, res) => {
  //     const { first, second } = req.params;
  //     res.send({ result: ~~first + ~~second });
  //   });

  //   app.use(express.json()); //method that returns MW that parses jsons from HTTP reqs
  //   app.post("/echo", (req, res) => {
  //     res.send(req.body);
  //   });

  return app;
};

module.exports = { setupExpressServer };
