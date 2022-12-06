import { CocAPI } from './coc_api';
const config = require('./config');

export class Player {
    public tag: string | undefined;
    public name: string | undefined;

    async get(tag:string): Promise <void> {
        console.log("get_player()");
    
        try {
            const api = new CocAPI(config.token);
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