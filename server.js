const db = require("./config").db;
const knex = require("knex")(db);
const express = require("express");

const setupExpressServer = () => {
  const app = express();

  app.use(express.static("public"));

  app.get("/", (req, res) => {
    res.sendFile("index.html");
  });

  app.get("/api/queens", async (req, res) => {
    const func = () => {
      return knex.select().table("queens");
    };
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
    const response = await func();
    res.send(response);
  });

  app.get("/api/queens/seasons/:season", async (req, res) => {
    const { season } = req.params;
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("season", season)
        .orderBy("ranking", "desc");
    };
    const response = await func();
    res.send(response);
  });

  app.get("/api/queens/seasons/:season/top/:ranking", async (req, res) => {
    const { season } = req.params;
    let { ranking } = req.params;
    ranking++;
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("season", season)
        .andWhere("ranking", "<", ranking)
        .orderBy("ranking");
    };
    const response = await func();
    res.send(response);
  });

  app.get("/api/queens/wins/:wins", async (req, res) => {
    let { wins } = req.params;
    wins--;
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("wins", ">", wins);
    };
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

  app.get("/api/winners/:season", async (req, res) => {
    const { season } = req.params;
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("ranking", 1)
        .where("season", season);
    };
    const response = await func();
    res.send(response);
  });

  app.get("/api/congeniality", async (req, res) => {
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("congeniality", true)
        .orderBy("season");
    };
    const response = await func();
    res.send(response);
  });

  app.get("/api/congeniality/:season", async (req, res) => {
    const { season } = req.params;
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("congeniality", true)
        .where("season", season);
    };
    const response = await func();
    res.send(response);
  });

  app.get("/api/snatch_game", async (req, res) => {
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("snatch_game", true);
    };
    const response = await func();
    res.send(response);
  });

  app.get("/api/snatch_game/:season", async (req, res, next) => {
    const { season } = req.params;
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("snatch_game", true)
        .where("season", season);
    };
    const response = await func();
    res.send(response);
  });

  app.get("/api/first_win", async (req, res) => {
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("first_win", true);
    };
    const response = await func();
    res.send(response);
  });

  app.get("/api/first_win/:season", async (req, res) => {
    const { season } = req.params;
    const func = () => {
      return knex
        .select()
        .table("queens")
        .where("first_win", true)
        .where("season", season);
    };
    const response = await func();
    res.send(response);
  });

  app.use(express.json());
  app.post("/api/queens", async (req, res) => {
    const newQueen = req.body;
    console.log(newQueen);
    const {
      name,
      season,
      ranking,
      congeniality,
      snatch_game,
      first_win,
      entrance,
      wins
    } = newQueen;
    const func = () => {
      return knex("queens").insert({
        name: name,
        season: season,
        ranking: ranking,
        congeniality: congeniality,
        snatch_game: snatch_game,
        first_win: first_win,
        entrance: entrance,
        wins: wins
      });
    };
    await func();
    res.send(`Welcome to the stage, ${name}!`);
  });

  app.patch("/api/queens/:name", async (req, res) => {
    const { name } = req.params;
    const updateReq = req.body;
    const updateRes = {};
    for (const [key, value] of Object.entries(updateReq)) {
      updateRes[key] = value;
    }
    const func = () => {
      return knex("queens")
        .where("name", name)
        .update(updateRes);
    };
    await func();
    res.send(
      `${name}...\ 
      Condragulations, your information has been updated.`
    );
  });

  app.delete("/api/queens/:name", async (req, res) => {
    const { name } = req.params;
    const func = () => {
      return knex("queens")
        .where("name", name)
        .del();
    };
    await func();
    res.send(`${name}... Sashay away...`);
  });

  return app;
};

module.exports = { setupExpressServer };
