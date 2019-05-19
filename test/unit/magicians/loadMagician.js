const expect = require('chai').expect;
const loadMagicianMW = require('../../../middleware/magicians/loadMagician');
const magicianModel = require('../../../models/magician');

describe('loadMagician middleware ', function () {
    it('should call next if req.params.magicianid is undefined', function (done) {
        let objRep = {
            magicianModel: magicianModel
        };
        let reqMock = {
            params: {}
        };
        let resMock = {
        };

        loadMagicianMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });

    it('should call next if req.params.magicianid is null', function (done) {
        let objRep = {
            magicianModel: magicianModel
        };
        let reqMock = {
            params: {
                magicianid: null
            }
        };
        let resMock = {
        };

        loadMagicianMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });

    it('should find magician, calls next', function (done) {
        let magicianMock = {
            name: 'Name',
            favouriteColour: 'FavouriteColour',
            findOne: function ({}, cb) {
                cb(undefined, {});
            }
        };
        let objRep = {
            magicianModel: magicianMock
        };
        let reqMock = {
            params: {
                magicianid: '123456'
            }
        };
        let resMock = {
            locals: {
                magician: {}
            },
            magician: magicianMock
        };

        loadMagicianMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });

    it('should not find magician, redirect to magicians', function (done) {
        let magicianMock = {
            name: 'Name',
            favouriteColour: 'FavouriteColour',
            findOne: function ({}, cb) {
                cb(undefined, undefined);
            }
        };
        let objRep = {
            magicianModel: magicianMock
        };
        let reqMock = {
            params: {
                magicianid: '123456'
            }
        };
        let resMock = {
            locals: {
                magician: {}
            },
            magician: magicianMock,
            redirect: function (newUrl) {
                expect(newUrl).be.eql('/magicians');
                done();
            }
        };

        loadMagicianMW(objRep)(reqMock, resMock, function (err) {
            expect('should not call next').be.eql(false);
        });
    });

    it('should not find magician because of error, calls next witt error', function (done) {
        let magicianMock = {
            name: 'Name',
            favouriteColour: 'FavouriteColour',
            findOne: function (undefined, cb) {
                cb({}, {});
            }
        };
        let objRep = {
            magicianModel: magicianMock
        };
        let reqMock = {
            params: {
                magicianid: '123456'
            }
        };
        let resMock = {
            locals: {
                magician: {}
            },
            magician: magicianMock
        };

        loadMagicianMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });
});
