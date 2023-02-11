import {
  GoogleSpreadsheet,
  GoogleSpreadsheetRow,
  GoogleSpreadsheetWorksheet,
} from "google-spreadsheet";
import { PlayerModel } from "../model/player/player.model";
import { SpreadsheetAPI } from "./spreadsheet_api";

export class PlayerSpreadsheet {
  private doc: GoogleSpreadsheet;
  private sheet: GoogleSpreadsheetWorksheet;

  constructor(document: GoogleSpreadsheet) {
    this.doc = document;
  }

  // TODO:
  // - Verify is sheet exists
  // - Create if not exists
  //   - Add header row
  //   - Add player data
  //
  // - Add create/retrieval/update date
  async getSheet(sheetTitle: string) {
    this.sheet = this.doc.sheetsByTitle[sheetTitle];
    if (this.sheet) {
      console.debug("[D] - PlayerDataSheet: found sheet!");
    } else {
      await this.addSheet(sheetTitle);
    }
  }

  async addSheet(sheetTitle: string) {
    // create a sheet and set the header row
    this.sheet = await this.doc.addSheet({
      headerValues: [
        "tag",
        "name",
        "clanTag",
        "donations",
        "donationsReceived",
        "townHallLevel",
        "warPreference",
        "clanGames",
        "retrievalTimestamp",
      ],
      title: sheetTitle,
    });
  }

  async addPlayer(oPlayer: PlayerModel) {
    const googleDate =
      oPlayer.retrievalTimestamp === undefined
        ? SpreadsheetAPI.getGoogleDate(new Date())
        : SpreadsheetAPI.getGoogleDate(oPlayer.retrievalTimestamp);

    const newRow: GoogleSpreadsheetRow = await this.sheet.addRow({
      tag: oPlayer.tag,
      name: oPlayer.name === undefined ? "" : oPlayer.name,
      clanTag: oPlayer.clanTag === undefined ? "" : oPlayer.clanTag,
      donations: oPlayer.donations === undefined ? "" : oPlayer.donations,
      donationsReceived:
        oPlayer.donationsReceived === undefined
          ? ""
          : oPlayer.donationsReceived,
      townHallLevel:
        oPlayer.townHallLevel === undefined ? "" : oPlayer.townHallLevel,
      warPreference:
        oPlayer.warPreference === undefined ? "" : oPlayer.warPreference,
      clanGames: oPlayer.clanGames === undefined ? "" : oPlayer.clanGames,
      retrievalTimestamp: googleDate,
    });

    // TODO: format date column
  }
}
