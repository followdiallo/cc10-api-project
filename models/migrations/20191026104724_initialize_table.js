const data = require("../queenData");
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
      data.forEach(queen => {
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
        return knex("queens").insert({
          name: name,
          season: season,
          ranking: ranking,
          congeniality: congeniality,
          snatch_game: snatchGame,
          first_win: firstWin,
          entrance: entrance,
          wins: wins
        });
      });
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("queens");
};
