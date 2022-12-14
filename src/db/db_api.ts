import { Sequelize } from "sequelize-typescript";
import { PlayerModel } from "../model/player/player.model";
import Player from "../db/player.table";
import { ClanModel } from "../model/clan/clan.model";
import Clan from "../db/clan.table";

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
    this.db.sync({ alter: true }); // perform changes when model is updated
  }

  // TODO: change input type so remapping isn't required anymore
  // or move function to controller?
  savePlayer(oPlayer: PlayerModel) {
    const player = {
      tag: oPlayer.tag,
      name: oPlayer.name,
      clanTag: oPlayer.clanTag,
      donations: oPlayer.donations,
      donationsReceived: oPlayer.donationsReceived,
      warPreference: oPlayer.warPreference,
      townHallLevel: oPlayer.townHallLevel,
    };
    Player.upsert(player);
  }

  saveClan(oClan: ClanModel) {
    const clan = {
      tag: oClan.tag,
      name: oClan.name,
    };
    Clan.upsert(clan);
  }
}
