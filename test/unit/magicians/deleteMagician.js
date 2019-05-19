const expect = require('chai').expect;
const deleteMagicianMW = require('../../../middleware/magicians/deleteMagician');

describe('deleteMagician middleware ', function () {
    it('should call next if res.locals.magician is undefined', function (done) {
        let objRep = {
            magicianModel: true
        };
        let reqMock = {
        };
        let resMock = {
            locals: {}
        };

        deleteMagicianMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });

    it('should remove magician, redirect to /magicians', function (done) {
        let objRep = {
            magicianModel: true
        };
        let reqMock = {
        };
        let magicianMock = {
            name: 'Name',
            favouriteColour: 'FavouriteColour',
            remove : function (cb) {
                cb(undefined, {
                    id: '123456'
                })
            }
        };
        let resMock = {
            locals: {
                magician: magicianMock
            },
            redirect: function (newUrl) {
                expect(newUrl).be.eql('/magicians');
                done();
            }
        };

        deleteMagicianMW(objRep)(reqMock, resMock, function (err) {
            expect('should not call next').be.eql(false);
        });
    });

    it('should fail at removing magician calls next', function (done) {
        let objRep = {
            magicianModel: true
        };
        let reqMock = {
        };
        let magicianMock = {
            name: 'Name',
            favouriteColour: 'FavouriteColour',
            remove : function (cb) {
                cb('ERROR', {
                    id: '123456'
                });
                done();
            }
        };
        let resMock = {
            locals: {
                magician: magicianMock
            }
        };

        deleteMagicianMW(objRep)(reqMock, resMock, function (err) {
            expect(err).be.eql('ERROR');
        });
    });
});
