const assert = require("chai").assert;

describe("Verify token retrieval from environment variables", function () {
  it("Check if token differs from undefined", async function () {
    const token = process.env.TOKEN;
    assert.exists(token, "TOKEN is not undefined");
  });
});
