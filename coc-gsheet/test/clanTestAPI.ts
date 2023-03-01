const assert = require("chai").assert;
import { CocAPI } from "../api/coc_api";
import { DbAPI } from "../db/db_api";
import { ClanController } from "../model/clan/clan.controller";

// TODO: move to specific prepare function?
const api = new CocAPI(process.env.COC_TOKEN);

describe("Retrieve clan from API", function () {
  it("Check that clan #20LCQ2CR8 is Yoshi Island", async function () {
    const oController = new ClanController("#20LCQ2CR8", api);
    await oController.get();
    assert.strictEqual(oController.oClan.name, "Yoshi Island");
  });
});
