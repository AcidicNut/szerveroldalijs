const expect = require('chai').expect;
const deleteSpellMW = require('../../../middleware/spells/deleteSpell');

describe('deleteSpell middleware ', function () {
    it('should call next if res.locals.spell is undefined', function (done) {
        let objRep = {
            spellModel: true
        };
        let reqMock = {
        };
        let resMock = {
            locals: {}
        };

        deleteSpellMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });

    it('should remove spell, redirect to /spells', function (done) {
        let objRep = {
            spellModel: true
        };
        let reqMock = {
        };
        let spellMock = {
            name: 'Name',
            details: 'Details',
            _inventor: 'Inventor',
            remove : function (cb) {
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

        deleteSpellMW(objRep)(reqMock, resMock, function (err) {
            expect('should not call next').be.eql(false);
        });
    });

    it('should fail at removing spell calls next', function (done) {
        let objRep = {
            spellModel: true
        };
        let reqMock = {
        };
        let spellMock = {
            name: 'Name',
            details: 'Details',
            _inventor: 'Inventor',
            remove : function (cb) {
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

        deleteSpellMW(objRep)(reqMock, resMock, function (err) {
            expect(err).be.eql('ERROR');
        });
    });
});
