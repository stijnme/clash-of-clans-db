import express, { Express, Request, Response } from "express";
import { CocAPI } from "./api/coc_api";
import { DbAPI } from "./db/db_api";
import { PlayerController } from "./model/player/player.controller";
import { ClanController } from "./model/clan/clan.controller";
import { SpreadsheetAPI } from "./gsheet/spreadsheet_api";
import { PlayerSpreadsheet } from "./gsheet/player.data";

const app: Express = express();

app.get("/", async (req: Request, res: Response) => {
  const docId: string = req.query.docId as string;
  const clanTag: string = req.query.clanTag as string;
  // TODO: validate input

  // Init
  const api = new CocAPI(process.env["COC_TOKEN"]);
  const db = new DbAPI();

  const clan = new ClanController("#" + clanTag, api, db);
  await clan.get();

  if (clan.oClan.apiRetrieved) {
    clan.save();

    const gapi = new SpreadsheetAPI();
    await gapi.loadDoc(docId);
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

  res.send(
    "Received: <UL><LI>docId: " + docId + "<LI>clanTag: " + clanTag + "</UL>"
  );
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
