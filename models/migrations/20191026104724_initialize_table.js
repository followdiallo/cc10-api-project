const data = require("../queenData.js");
console.log({ data });
const insertData = data.map(queen => {
  const [
    name,
    season,
    ranking,
    congeniality,
    snatchGame,
    firstWin,
    entrance,
    wins
  ] = queen;
  return {
    name: name,
    season: season,
    ranking: ranking,
    congeniality: congeniality,
    snatch_game: snatchGame,
    first_win: firstWin,
    entrance: entrance,
    wins: wins
  };
});
//name, season, ranking, congeniality, snatch_game, first_win, entrance, wins

exports.up = function(knex) {
  return knex.schema
    .createTable("queens", t => {
      t.increments().index();
      t.string("name");
      t.integer("season");
      t.integer("ranking");
      t.boolean("congeniality");
      t.boolean("snatch_game");
      t.boolean("first_win");
      t.integer("entrance");
      t.integer("wins");
    })
    .then(() => {
      return knex("queens").insert(insertData);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("queens");
};
