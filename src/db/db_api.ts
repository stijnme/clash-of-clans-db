import { Sequelize } from "sequelize-typescript";
import { PlayerModel } from "../model/playerModel";
import Player from "./player.model";

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
    this.db.addModels([__dirname + "/*.model.js"]);
    this.db.sync({ force: true });
  }

  savePlayer(oPlayer: PlayerModel) {
    const player = {
      tag: oPlayer.tag,
      name: oPlayer.name,
    };
    Player.upsert(player);
  }
}
