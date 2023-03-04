import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CocAPI } from "./api/coc_api";
//import { DbAPI } from "./db/db_api";
import { PlayerController } from "./model/player/player.controller";
import { ClanController } from "./model/clan/clan.controller";
import { SpreadsheetAPI } from "./gsheet/spreadsheet_api";
import { PlayerSpreadsheet } from "./gsheet/player.data";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const docId: string = req.query.docId as string;
  const sheetName: string = req.query.sheetName as string;
  const clanTag: string = req.query.clanTag as string;

  // TODO: validate input
  /*   const name = req.query.name || (req.body && req.body.name);
  const responseMessage = name
    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  */
  const responseMessage = {
    status: "Started processing...",
    docId: docId,
    sheetName: sheetName,
    clanTag: clanTag,
  };
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
  const api = new CocAPI(process.env["COC_TOKEN"]);

  const clan = new ClanController("#" + clanTag, api);
  await clan.get();

  if (clan.oClan.apiRetrieved) {
    console.log("[D] server: Retrieved clan info");
    const gapi = new SpreadsheetAPI();
    await gapi.loadDoc(docId);
    const playerSheet = new PlayerSpreadsheet(gapi.doc);
    await playerSheet.getSheet(sheetName);

    // loop members
    if (clan.oClan.memberList) {
      for (const member of clan.oClan.memberList) {
        console.log("[I] Index - Found member: " + member.name);
        const player = new PlayerController(member.tag, api);
        await player.get();
        if (player.oPlayer.apiRetrieved) {
          // write to Google Spreadsheet
          await playerSheet.addPlayer(player.oPlayer);
        } else {
          console.log("[E] Index - Unable to find player: " + member.tag);
        }
      }
    }
  }
};

export default httpTrigger;
