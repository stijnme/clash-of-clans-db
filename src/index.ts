import fetch from 'node-fetch';

async function get_player() {
    console.log("get_player()");

    const response = await fetch("https://api.clashofclans.com/v1/players/%23LOLYC9UYQ", {
        "headers": {
          "accept": "application/json",
          "authorization": "Bearer xxx"
        },
        "body": null,
        "method": "GET"
      });
    const data = await response.json();

    debugger;

    console.log("Found player: " + data.name + "\n" +
                "Clan: " + data.clan.name);
}


get_player();

