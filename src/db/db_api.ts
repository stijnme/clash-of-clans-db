import { Sequelize } from "sequelize-typescript";
import { PlayerModel } from "../model/player/player.model";
import Player from "../db/player.table";

export class DbAPI {
  private db: Sequelize;

  constructor() {
    this.db = new Sequelize({
      dialect: "sqlite",
      storage: "./db/ClashOfClans.db",
    });
    this.init();
  }

  init() {
    console.info("[I] DbAPI - init()");
    console.debug("[D] DbAPI - dirname: " + __dirname);
    this.db.addModels([__dirname + "/*.table.*"]);
    this.db.sync({ force: true });
  }

  // TODO: change input type so remapping isn't required anymore
  // or move function to factory?
  savePlayer(oPlayer: PlayerModel) {
    const player = {
      tag: oPlayer.tag,
      name: oPlayer.name,
      clanTag: oPlayer.clanTag,
    };
    Player.upsert(player);
  }
}
