import { CocAPI } from "../api/coc_api";
import { DbAPI } from "../db/db_api";
import { PlayerModel } from "./playerModel";

export class Player {
  public tag: string;
  public name: string | undefined;
  private api: CocAPI;
  private db: DbAPI | undefined;

  constructor(tag: string, api: CocAPI, db?: DbAPI) {
    this.tag = tag;
    this.api = api;
    this.db = db;
  }

  async get(): Promise<void> {
    console.log("[I] Player - get_player()");

    try {
      // TODO: move token to api
      const data: PlayerModel = await this.api.getPlayer(this.tag);

      // TODO: replace with status flag
      if (data.name !== undefined) {
        console.log(
          //"Found player: " + data.name + "\n" + "Clan: " + data.clan.name
          "[I] Player - Found player: " + data.name
        );
      }
      this.name = data.name;
      this.tag = data.tag;
    } catch (error) {
      console.error("[E] Player - " + error);
    }
  }

  save(): void {
    console.info("[I] Player - save()");
    if (this.db !== undefined) {
      // TODO: call db to save model
      this.db.savePlayer(this);
    }
    //
  }
}
