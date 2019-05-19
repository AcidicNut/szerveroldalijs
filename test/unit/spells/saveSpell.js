const expect = require('chai').expect;
const saveSpellMW = require('../../../middleware/spells/saveSpell');
const spellModel = require('../../../models/spell');

describe('saveSpell middleware ', function () {
    it('should call next if req.body.spell is undefined', function (done) {
        let objRep = {
            spellModel: true
        };
        let reqMock = {
            body: {}
        };

        saveSpellMW(objRep)(reqMock, {}, function (err) {
            done();
        });
    });

    it('should create new spellModel', function (done) {
        let objRep = {
            spellModel: spellModel
        };
        let reqMock = {
            body: {
                spell: true
            }
        };

        let resMock = {
            locals: {},
        };

        saveSpellMW(objRep)(reqMock, resMock, function (err) {
        });
        done();
    });

    it('should use res.locals.spell, saves successfully, redirect to /spells', function (done) {
        let objRep = {
            spellModel: spellModel
        };
        let reqMock = {
            body: {
                spell: true
            }
        };

        spellMock = {
            name: 'Name',
            details: 'Details',
            _inventor: 'Inventor',
            save: function (cb) {
                cb(undefined, {
                    id: '123456'
                })
            }
        };

        let resMock = {
            locals: {
                spell: spellMock
            },
            redirect: function (newUrl) {
                expect(newUrl).be.eql('/spells');
                done();
            }
        };

        saveSpellMW(objRep)(reqMock, resMock, function (err) {
            expect('should not call next').be.eql(false);
        });
    });

    it('should use res.locals.spell, calls next with random save error', function (done) {
        let objRep = {
            spellModel: spellModel
        };
        let reqMock = {
            body: {
                spell: true
            }
        };

        spellMock = {
            name: 'Name',
            details: 'Details',
            _inventor: 'Inventor',
            save: function (cb) {
                cb('ERROR', {
                    id: '123456'
                });
                done();
            }
        };

        let resMock = {
            locals: {
                spell: spellMock
            }
        };

        saveSpellMW(objRep)(reqMock, resMock, function (err) {
            expect(err).be.eql('ERROR');
        });
    });

    it('should use res.locals.spell, calls next with duplicate key save error', function (done) {
        let objRep = {
            spellModel: spellModel
        };
        let reqMock = {
            body: {
                spell: true
            }
        };

        let errorMock = {
            name: 'MongoError',
            code: 11000
        };

        let spellMock = {
            name: 'Name',
            details: 'Details',
            _inventor: 'Inventor',
            save: function (cb) {
                cb(errorMock, {
                    id: '123456'
                });
            }
        };

        let resMock = {
            locals: {
                spell: spellMock,
                err: []
            }
        };

        saveSpellMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });
});
