import { assert } from "chai";
import { Client } from "clashofclans.js";
import Config from "../src/config";

const client = new Client({ keys: [Config.token] });

describe("Retrieve clan from clashofclans.js API", function () {
  it("Check that clan #20LCQ2CR8 is Yoshi Island", async function () {
    const clan = await client.getClan("#20LCQ2CR8");

    assert.strictEqual(clan.name, "Yoshi Island");
  });
});
