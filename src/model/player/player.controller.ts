import { CocAPI } from "../../api/coc_api";
import { DbAPI } from "../../db/db_api";
import { PlayerModel } from "./player.model";
// TODO: rename

export class PlayerController {
  public oPlayer: PlayerModel;
  private api: CocAPI;
  private db: DbAPI | undefined;

  constructor(tag: string, api: CocAPI, db?: DbAPI) {
    this.oPlayer = { tag: tag };
    this.api = api;
    this.db = db;
  }

  async get(): Promise<void> {
    console.log("[I] Player - get_player()");

    try {
      // TODO: move token to api
      const data: PlayerModel = await this.api.getPlayer(this.oPlayer.tag);

      // TODO: replace with status flag
      if (data.name !== undefined) {
        console.log(
          //"Found player: " + data.name + "\n" + "Clan: " + data.clan.name
          "[I] Player - Found player: " + data.name
        );
      }
      this.oPlayer.name = data.name;
      this.oPlayer.clanTag = data.clanTag;
    } catch (error) {
      console.error("[E] Player - " + error);
    }
  }

  save(): void {
    console.info("[I] Player - save()");
    if (this.db !== undefined) {
      // call db to save model
      // TODO: rework to reduce maintenance
      this.db.savePlayer(this.oPlayer);
    }
    //
  }
}
