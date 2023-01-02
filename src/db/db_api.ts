import { Sequelize } from "sequelize-typescript";

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
}
