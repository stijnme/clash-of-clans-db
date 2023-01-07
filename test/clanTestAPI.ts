const assert = require("chai").assert;
import { CocAPI } from "../src/api/coc_api";
import Config from "../src/config";
import { DbAPI } from "../src/db/db_api";
import { ClanController } from "../src/model/clan/clan.controller";

// TODO: move to specific prepare function?
const api = new CocAPI(Config.token);

describe("Retrieve clan from API", function () {
  it("Check that clan #20LCQ2CR8 is Yoshi Island", async function () {
    const oController = new ClanController("#20LCQ2CR8", api);
    await oController.get();
    assert.strictEqual(oController.oClan.name, "Yoshi Island");
  });
});
