import { CocAPI } from "../../api/coc_api";
import { DbAPI } from "../../db/db_api";
import { PlayerModel } from "./player.model";
// TODO: rename

export class PlayerController {
  public oPlayer: PlayerModel;
  private api: CocAPI;
  private db: DbAPI | undefined;

  constructor(tag: string, api: CocAPI, db?: DbAPI) {
    this.oPlayer = { tag: tag, apiRetrieved: false };
    this.api = api;
    this.db = db;
  }

  async get(): Promise<void> {
    console.log("[I] Player - get_player()");

    try {
      const data: PlayerModel = await this.api.getPlayer(this.oPlayer.tag);

      if (data.apiRetrieved) {
        console.log(
          "[I] Player - Found player: " + data.name
        );
        this.oPlayer = data;
      }
    } catch (error) {
      console.error("[E] Player - " + error);
      this.oPlayer.apiRetrieved = false;
    }
  }

  save(): void {
    console.info("[I] Player - save()");
    if (this.db !== undefined) {
      // call db to save model
      this.db.savePlayer(this.oPlayer);
    }
  }
}
