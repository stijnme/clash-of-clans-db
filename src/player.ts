const cocapi = require('./coc_api');
const config = require('./config');

module.exports = class Player {
    public tag: string | undefined;
    public name: string | undefined;

    async get(tag:string): Promise <void> {
        console.log("get_player()");
    
        try {
            const api = new cocapi(config.token);
            const data = await api.get("/players/" + tag);
            console.log("Found player: " + data.name + "\n" +
                        "Clan: " + data.clan.name);
            this.name = data.name;
            this.tag = data.tag;
        } catch (error) {
            console.error(error);
        }
    }
}