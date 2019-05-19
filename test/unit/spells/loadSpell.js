const expect = require('chai').expect;
const loadSpellMW = require('../../../middleware/spells/loadSpell');
const spellModel = require('../../../models/spell');

describe('loadSpell middleware ', function () {
    it('should call next if req.params.spellid is undefined', function (done) {
        let objRep = {
            spellModel: spellModel
        };
        let reqMock = {
            params: {}
        };
        let resMock = {
        };

        loadSpellMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });

    it('should call next if req.params.spellid is null', function (done) {
        let objRep = {
            spellModel: spellModel
        };
        let reqMock = {
            params: {
                spellid: null
            }
        };
        let resMock = {
        };

        loadSpellMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });

    it('should find spell, calls next', function (done) {
        let spellMock = {
            name: 'Name',
            details: 'Details',
            _inventor: 'Inventor',
            findOne: function ({}, cb) {
                cb(undefined, {});
            }
        };
        let objRep = {
            spellModel: spellMock
        };
        let reqMock = {
            params: {
                spellid: '123456'
            }
        };
        let resMock = {
            locals: {
                spell: {}
            },
            spell: spellMock
        };

        loadSpellMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });

    it('should not find spell, redirect to spells', function (done) {
        let spellMock = {
            name: 'Name',
            details: 'Details',
            _inventor: 'Inventor',
            findOne: function ({}, cb) {
                cb(undefined, undefined);
            }
        };
        let objRep = {
            spellModel: spellMock
        };
        let reqMock = {
            params: {
                spellid: '123456'
            }
        };
        let resMock = {
            locals: {
                spell: {}
            },
            spell: spellMock,
            redirect: function (newUrl) {
                expect(newUrl).be.eql('/spells');
                done();
            }
        };

        loadSpellMW(objRep)(reqMock, resMock, function (err) {
            expect('should not call next').be.eql(false);
        });
    });

    it('should not find spell because of error, calls next witt error', function (done) {
        let spellMock = {
            name: 'Name',
            details: 'Details',
            _inventor: 'Inventor',
            findOne: function (undefined, cb) {
                cb({}, {});
            }
        };
        let objRep = {
            spellModel: spellMock
        };
        let reqMock = {
            params: {
                spellid: '123456'
            }
        };
        let resMock = {
            locals: {
                spell: {}
            },
            spell: spellMock
        };

        loadSpellMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });
});
