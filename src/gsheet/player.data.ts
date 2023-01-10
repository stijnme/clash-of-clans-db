import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet,
} from "google-spreadsheet";
import { PlayerModel } from "../model/player/player.model";

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
  async addSheet() {
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
        "retrievalTimestamp",
      ],
      title: "API-PlayerData",
    });
  }

  async addPlayer(oPlayer: PlayerModel) {
    await this.sheet.addRow({
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
      retrievalTimestamp: new Date().toUTCString(),
    });
  }
}
