import { normalize } from "path";

export {};

const Player = require('./player');
//const PlayersDB = require('./model/players');
const { Sequelize, DataTypes } = require('sequelize');

async function main() {
    const player1 = new Player();
    await player1.get("%23LOLYC9UYQ");
    console.log("Found player1: " + player1.name);

    // try sequilize
    if (player1 !== undefined) {
        // define db
        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: './db/ClashOfClans.db'
        });

        // define Players model
        const Players = sequelize.define('Players',
            {
                tag: { primaryKey:true, allowNull: false, type: Sequelize.STRING },
                name: { type: Sequelize.STRING },
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
    }
}


main();