const expect = require('chai').expect;
const saveMagicianMW = require('../../../middleware/magicians/saveMagician');
const magicianModel = require('../../../models/magician');

describe('saveMagician middleware ', function () {
    it('should call next if req.body.magician is undefined', function (done) {
        let objRep = {
            magicianModel: true
        };
        let reqMock = {
            body: {}
        };

        saveMagicianMW(objRep)(reqMock, {}, function (err) {
            done();
        });
    });

    it('should create new magicianModel', function (done) {
        let objRep = {
            magicianModel: magicianModel
        };
        let reqMock = {
            body: {
                magician: true
            }
        };

        let resMock = {
            locals: {},
        };

        saveMagicianMW(objRep)(reqMock, resMock, function (err) {
        });
        done();
    });

    it('should use res.locals.magician, saves successfully, redirect to /magicians', function (done) {
        let objRep = {
            magicianModel: magicianModel
        };
        let reqMock = {
            body: {
                magician: true
            }
        };

        let magicianMock = {
            name: 'Name',
            favouriteColour: 'FavouriteColour',
            save: function (cb) {
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

        saveMagicianMW(objRep)(reqMock, resMock, function (err) {
            expect('should not call next').be.eql(false);
        });
    });

    it('should use res.locals.magician, calls next with random save error', function (done) {
        let objRep = {
            magicianModel: magicianModel
        };
        let reqMock = {
            body: {
                magician: true
            }
        };

        let magicianMock = {
            name: 'Name',
            favouriteColour: 'FavouriteColour',
            save: function (cb) {
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

        saveMagicianMW(objRep)(reqMock, resMock, function (err) {
            expect(err).be.eql('ERROR');
        });
    });

    it('should use res.locals.magician, calls next with duplicate key save error', function (done) {
        let objRep = {
            magicianModel: magicianModel
        };
        let reqMock = {
            body: {
                magician: true
            }
        };

        let errorMock = {
            name: 'MongoError',
            code: 11000
        };

        let magicianMock = {
            name: 'Name',
            favouriteColour: 'FavouriteColour',
            save: function (cb) {
                cb(errorMock, {
                    id: '123456'
                })
            }
        };

        let resMock = {
            locals: {
                magician: magicianMock,
                err: []
            }
        };

        saveMagicianMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });
});
