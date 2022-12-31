import { CocAPI } from "../api/coc_api";
import Config from "../config";

export class Player {
  public tag: string;
  public name: string | undefined;

  constructor(tag: string) {
    this.tag = tag;
  }

  async get(): Promise<void> {
    console.log("[I] Player - get_player()");

    try {
      const api = new CocAPI(Config.token);
      // TODO: create interface/type for the player data
      const data: any = await api.getPlayer(this.tag);

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
}

/* import { CocAPI } from './coc_api';
import Config from './config';
import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/ClashOfClans.db'
});

class Player extends Model {
    declare tag: string | undefined;
    declare name: string | undefined;

    async request(tag:string): Promise <void> {
        console.log("get_player()");
    
        try {
            const api = new CocAPI(Config.token);
            // TODO: create interface/type for the player data
            const data: any = await api.get("/players/" + tag);

            console.log("Found player: " + data.name + "\n" +
                        "Clan: " + data.clan.name);
            this.name = data.name;
            this.tag = data.tag;
        } catch (error) {
            console.error(error);
        }
    }
}

Player.init(
    {
        tag: { primaryKey:true, allowNull: false, type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
    },
    //{ timestamps: true }
    {
        sequelize: sequelize
    }
);

export default Player; */