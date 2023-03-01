import { assert } from "chai";
import { Client } from "clashofclans.js";

const client = new Client({ keys: [process.env["COC_TOKEN"]] });

async function main() {
  // describe("Retrieve player from clashofclans.js API", function () {
  //   it("Check that player #LOLYC9UYQ  MilkSjeik", async function () {
  const raid = await client.getCapitalRaidSeasons("#20LCQ2CR8");
  debugger;
  console.log(JSON.stringify(raid[0].members));
  //   });
  // });
}

main();
