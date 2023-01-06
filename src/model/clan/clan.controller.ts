import { CocAPI } from "../../api/coc_api";
import { DbAPI } from "../../db/db_api";
import { ClanModel } from "./clan.model";

export class ClanController {
  public oClan: ClanModel;
  private api: CocAPI;
  private db: DbAPI | undefined;

  constructor(tag: string, api: CocAPI, db?: DbAPI) {
    this.oClan = { tag: tag, apiRetrieved: false };
    this.api = api;
    this.db = db;
  }

  async get(): Promise<void> {
    console.log("[I] ClanController- get()");

    try {
      // TODO: move token to api
      const data: ClanModel = await this.api.getClan(this.oClan.tag);

      // TODO: replace with status flag
      if (data.name !== undefined) {
        console.log(
          //"Found player: " + data.name + "\n" + "Clan: " + data.clan.name
          "[I] ClanController- Found clan: " + data.name
        );
      }
      this.oClan = data;
    } catch (error) {
      console.error("[E] ClanController- " + error);
      this.oClan.apiRetrieved = false;
    }
  }

  save(): void {
    console.info("[I] ClanController - save()");
    if (this.db !== undefined) {
      // TODO: call db to save model
    }
  }
}
