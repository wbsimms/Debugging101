let assert = require('assert');
let DataAccess = require('../js/dataAccess');

describe("dataAccess",() => {
    describe("constructor",() => {
        it("works",()=>{
            let dataAccess = new DataAccess();
            assert.ok(dataAccess);
        });
    });
});