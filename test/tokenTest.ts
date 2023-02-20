const assert = require("chai").assert;

describe("Verify token retrieval from environment variables", function () {
  it("Check if COC_TOKEN exists", async function () {
    const token = process.env.COC_TOKEN;
    assert.exists(token, "COC_TOKEN is not undefined");
  });
  it("Check if COC_URI exists", async function () {
    const token = process.env.COC_URI;
    assert.exists(token, "COC_URI is not undefined");
  });
});
