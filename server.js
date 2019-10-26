const db = require("./config").db;
const knex = require("knex")(db);
const express = require("express");
const setupExpressServer = () => {
  const app = express();

  app.get("/api/queens", async (req, res) => {
    // const response = knex
    //   .select()
    //   .table("queens")
    //   .then();
    // res.send(response);
    const func = () => {
      return knex.select().table("queens");
    };
    console.log("GET ALL QUEENS");
    const response = await func();
    res.send(response);
  });

  app.get("/api/queens/:name", async (req, res) => {
    const { name } = req.params;
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("name", name);
    };
    console.log("GET QUEENS BY NAME");
    const response = await func();
    res.send(response);
  });

  app.get("/api/winners", async (req, res) => {
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("ranking", 1);
    };
    const response = await func();
    res.send(response);
  });

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
