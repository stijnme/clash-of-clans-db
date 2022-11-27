//const axios = require('axios').default;
const cocapi = require('./coc_api');
const config = require('./config');


async function get_player(): Promise <void> {
    console.log("get_player()");

    try {
      const api = new cocapi(config.token);
      const data = await api.get("/players/%23LOLYC9UYQ");
      console.log("Found player: " + data.name + "\n" +
                  "Clan: " + data.clan.name);
    } catch (error) {
      console.error(error);
    }
}


get_player();

