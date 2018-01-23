let assert = require('assert');
let Hero = require('../../js/models/hero');


describe("Hero",() => {
    describe("constructor",() => {
        it("works",()=>{
            let hero = new Hero();
            assert.ok(hero);
        });
    });

    describe("fetch all",() => {
        it("works",(done)=>{
            Hero.find({}).then(res => {
                assert.ok(res);
                done();
            })
        });
    });

});