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

  // TODO: replace hardcoded clan tag
  const clan = new ClanController("#20LCQ2CR8", api, db);
  await clan.get();

  if (clan.oClan.apiRetrieved) {
    clan.save();

    // loop members
    if (clan.oClan.memberList) {
      for (const member of clan.oClan.memberList) {
        console.log("[I] Index - Found member: " + member.name);
        const player = new PlayerController(member.tag, api, db);
        await player.get();
        if (player.oPlayer.apiRetrieved) {
          player.save();
          // TODO: write to Google Spreadsheet
        } else {
          console.log("[E] Index - Unable to find player: " + member.tag);
        }
      }
    }
  }
}

main();
