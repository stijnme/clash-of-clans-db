import { assert } from "chai";
import { Client } from "clashofclans.js";

const client = new Client({ keys: [process.env["token"]] });

describe("Retrieve clan from clashofclans.js API", function () {
  it("Check that clan #20LCQ2CR8 is Yoshi Island", async function () {
    const clan = await client.getClan("#20LCQ2CR8");

    assert.strictEqual(clan.name, "Yoshi Island");
  });
});
