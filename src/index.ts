import { CocAPI } from "./api/coc_api";
import { DbAPI } from "./db/db_api";
import Config from "./config";
import { Player } from "./model/player";
//import { Sequelize, DataTypes } from 'sequelize';

async function main() {
  //    Player.sync();
  const api = new CocAPI(Config.token);
  const db = new DbAPI();

  //    const player1 = await Player.build();
  const player1 = new Player("%23LOLYC9UYQ", api, db);
  await player1.get();
  if (player1.name === undefined) {
    console.log("[I] Index - Unable to find player1: " + player1.tag);
  } else {
    console.log("[I] Index - Found player1: " + player1.name);
  }

  const player2 = new Player("%23QPYG9GCJL", api, db);
  await player2.get();
  console.log("[I] Index - Found player2: " + player2.name);

  player1.save();
  player2.save();
}

main();
