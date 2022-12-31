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
    this.db.addModels([__dirname + "/dist/src/db/*.model.ts"]);
    this.db.sync({ force: true });
  }
}
