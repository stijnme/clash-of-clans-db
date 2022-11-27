const axios = require('axios').default;

async function get_player(): Promise <void> {
    console.log("get_player()");

    try {
      const response:any = await axios.get("/players/%23LOLYC9UYQ", {
            // Accept headers required due to bug in axios 1.2.0
            headers: {
              "Accept": "application/json",
              "Accept-Encoding": "application/json",
              "Authorization": "Bearer xxx"
            },
            baseURL: "https://api.clashofclans.com/v1"
          }
      );
      console.log("Found player: " + response.data.name + "\n" +
                  "Clan: " + response.data.clan.name);
    } catch (error) {
      console.error(error);
    }
}


get_player();

