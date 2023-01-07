import { CocAPI } from "./api/coc_api";
import { DbAPI } from "./db/db_api";
import Config from "./config";
import { PlayerController } from "./model/player/player.controller";
import { ClanController } from "./model/clan/clan.controller";
//import { Sequelize, DataTypes } from 'sequelize';

async function main() {
  // Init
  const api = new CocAPI(Config.token);
  const db = new DbAPI();

  const player1 = new PlayerController("%23LOLYC9UYQ", api, db);
  await player1.get();
  if (player1.oPlayer.name === undefined) {
    console.log("[I] Index - Unable to find player1: " + player1.oPlayer.tag);
  } else {
    console.log("[I] Index - Found player1: " + player1.oPlayer.name);
  }

  const player2 = new PlayerController("%23QPYG9GCJL", api, db);
  await player2.get();
  console.log("[I] Index - Found player2: " + player2.oPlayer.name);

  if (player1.oPlayer.apiRetrieved) player1.save();
  if (player2.oPlayer.apiRetrieved) player2.save();

  if (player1.oPlayer.clanTag) {
    const clan = new ClanController(player1.oPlayer.clanTag, api);
    await clan.get();
    console.log("[I] Index - Found clan of player1: " + clan.oClan.name);
  }
}

main();
