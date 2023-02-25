import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CocAPI } from "./api/coc_api";
import { DbAPI } from "./db/db_api";
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
  const clanTag: string = req.query.clanTag as string;

  // TODO: validate input
  const responseMessage =
    "Processing request for:<UL>" +
    "<LI>Google document id: " +
    docId +
    "<LI>Clan tag: " +
    clanTag +
    "<UL>";
  /*   const name = req.query.name || (req.body && req.body.name);
  const responseMessage = name
    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  */
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};

export default httpTrigger;

/* app.get("/", async (req: Request, res: Response) => {
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
}) */
