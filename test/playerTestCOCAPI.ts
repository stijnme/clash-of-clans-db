import { assert } from "chai";
import { Client } from "clashofclans.js";
import Config from "../src/config";

const client = new Client({ keys: [Config.token] });

describe("Retrieve player from clashofclans.js API", function () {
  it("Check that player #LOLYC9UYQ is MilkSjeik", async function () {
    const player = await client.getPlayer("#LOLYC9UYQ");

    assert.strictEqual(player.name, "MilkSjeik");
  });
});
