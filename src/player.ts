const cocapi = require('./coc_api');
const config = require('./config');

module.exports = class Player {
    public name: string | undefined;

    async get(id:string): Promise <void> {
        console.log("get_player()");
    
        try {
            const api = new cocapi(config.token);
            const data = await api.get("/players/" + id);
            console.log("Found player: " + data.name + "\n" +
                        "Clan: " + data.clan.name);
            this.name = data.name;
        } catch (error) {
            console.error(error);
        }
    }
}