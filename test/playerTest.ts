/**************************************
List of assert methods - See  http://chaijs.com/api/assert/#method_assert
                        for the full list

fail(actual, expected, msg)
equal(a, b)
notEqual
isAbove     isAtLeast
isBelow     isAtMost
typeOf
isOk        strictEqual         deepEqual
isNotOk     strictNotEqual      deepNotEqual
isTrue      isNotTrue
isFalse     isNotFalse
isNull      isNaN           isNotNull       isNotNaN
exists      notExists
isUndefined isDefined
isFunction  isObject    isArray isString    isNumber
isBoolean
instanceOf
match       notMatch        <-- regular expressions
property    notProperty
propertyVal notPropertyVal
lengthOf
hasAnyKeys  hasAllKeys      containsAllKeys <!--- in objects
throws      doesNotThrow
closeTo     approximately
oneOf       <--- look in an array
changes     doesNotChange
increases   increasesBy     increasesButNotBy
decreases   decreasesBy     decreasesButNotBy
**************************************/
// Unit Testing with Mocha and Chai
//

const assert = require("chai").assert;
import { CocAPI } from "../src/api/coc_api";
import Config from "../src/config";
import { DbAPI } from "../src/db/db_api";
import { PlayerController } from "../src/model/player/player.controller";

// TODO: move to specific prepare function?
const api = new CocAPI(Config.token);
const db = new DbAPI();

describe("Retrieve player from API", function () {
  it("Check that player #LOLYC9UYQ is MilkSjeik", async function () {
    //    const oPlayer = new Player("%23LOLYC9UYQ", api);
    const oPlayerController = new PlayerController("%23LOLYC9UYQ", api, db);
    await oPlayerController.get();
    assert.strictEqual(oPlayerController.oPlayer.name, "MilkSjeik");
  });
});
