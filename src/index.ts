import { CocAPI } from "./api/coc_api";
import { DbAPI } from "./db/db_api";
import { PlayerController } from "./model/player/player.controller";
import { ClanController } from "./model/clan/clan.controller";
//import { Sequelize, DataTypes } from 'sequelize';
import { SpreadsheetAPI } from "../src/gsheet/spreadsheet_api";
import { PlayerSpreadsheet } from "./gsheet/player.data";

async function main() {
  // Init
  const api = new CocAPI(process.env["token"]);
  const db = new DbAPI();

  // TODO: replace hardcoded clan tag
  const clan = new ClanController("#20LCQ2CR8", api, db);
  await clan.get();

  if (clan.oClan.apiRetrieved) {
    clan.save();

    const gapi = new SpreadsheetAPI();
    await gapi.loadDoc("10cRyo1IOVh5fQmpuH34JnVGYIIRWhvPe27WLjyXpBrw"); // = TestAPI doc
    const playerSheet = new PlayerSpreadsheet(gapi.doc);
    await playerSheet.getSheet("API-PlayerData");

    // loop members
    if (clan.oClan.memberList) {
      for (const member of clan.oClan.memberList) {
        console.log("[I] Index - Found member: " + member.name);
        const player = new PlayerController(member.tag, api, db);
        await player.get();
        if (player.oPlayer.apiRetrieved) {
          player.save();
          // write to Google Spreadsheet
          await playerSheet.addPlayer(player.oPlayer);
        } else {
          console.log("[E] Index - Unable to find player: " + member.tag);
        }
      }
    }
  }
}

main();
