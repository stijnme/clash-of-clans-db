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

const assert = require('chai').assert;
const playerTest = require('../src/player');


describe('Retrieve player from API', function(){

    it('check that player #LOLYC9UYQ is MilkSjeik', async function(){
        const oPlayer = new playerTest();
        await oPlayer.get("%23LOLYC9UYQ");
        assert.isString(oPlayer.name, 'MilkSjeik.v2');
    });
});