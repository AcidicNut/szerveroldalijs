const expect = require('chai').expect;
const loadAllSpellsMW = require('../../../middleware/spells/loadAllSpells');

describe('loadAllSpells middleware ', function () {
    it('should call next with error', function (done) {
        let spellMock = {
            name: 'Name',
            details: 'Details',
            _inventor: 'Inventor',
            find: function ({}) {
                return spellMock;
            },
            populate: function ({}) {
                return spellMock;
            },
            exec: function (cb) {
                cb('ERROR', {});
            }
        };
        let objRep = {
            spellModel: spellMock
        };
        let reqMock = {
            params: {}
        };
        let resMock = {};

        loadAllSpellsMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });

    it('should find every spell, calls next', function (done) {
        let spellMock = {
            name: 'Name',
            details: 'Details',
            _inventor: 'Inventor',
            find: function ({}) {
                return spellMock;
            },
            populate: function ({}) {
                return spellMock;
            },
            exec: function (cb) {
                cb(undefined, {});
            }
        };
        let objRep = {
            spellModel: spellMock
        };
        let reqMock = {
            params: {}
        };
        let resMock = {
            locals: {
                spells: {}
            }
        };

        loadAllSpellsMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });
});
