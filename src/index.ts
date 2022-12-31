import { DbAPI } from "./db/db_api";
import { Player } from "./model/player";
//import { Sequelize, DataTypes } from 'sequelize';

async function main() {
  //    Player.sync();

  //    const player1 = await Player.build();
  const player1 = new Player("%23LOLYC9UYQ");
  await player1.get();
  if (player1.name === undefined) {
    console.log("[I] Index - Unable to find player1: " + player1.tag);
  } else {
    console.log("[I] Index - Found player1: " + player1.name);
  }
  player1.save();

  const player2 = new Player("%23QPYG9GCJL");
  await player2.get();
  console.log("[I] Index - Found player2: " + player2.name);

  const db = new DbAPI();

  /*     // try sequilize
    if (player1 !== undefined) {
        // define db
        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: './db/ClashOfClans.db'
        });

        // define Players model
        const Players = sequelize.define('Players',
            {
                tag: { primaryKey:true, allowNull: false, type: DataTypes.STRING },
                name: { type: DataTypes.STRING },
            },
            { timestamps: true }
        );

        console.log(Players === sequelize.models.Players);
        await Players.sync(); // create table in DB if needed

        // create new player object
        const newPlayer = {
            tag: player1.tag,
            name: player1.name
        };
        
        // insert/update in db
        Players.upsert(newPlayer);
    } */
}

main();
