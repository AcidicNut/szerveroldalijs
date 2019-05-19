const expect = require('chai').expect;
const loadAllMagiciansMW = require('../../../middleware/magicians/loadAllMagicians');
const magicianModel = require('../../../models/magician');

describe('loadAllMagicians middleware ', function () {
    it('should call next with error', function (done) {
        let magicianMock = {
            name: 'Name',
            favouriteColour: 'FavouriteColour',
            find: function ({}, cb) {
                cb({}, {});
                done();
            }
        };
        let objRep = {
            magicianModel: magicianMock
        };
        let reqMock = {
            params: {}
        };
        let resMock = {
        };

        loadAllMagiciansMW(objRep)(reqMock, resMock, function (err) {
        });
    });

    it('should find every magician, calls next', function (done) {
        let magicianMock = {
            name: 'Name',
            favouriteColour: 'FavouriteColour',
            find: function ({}, cb) {
                cb(undefined, {});
            }
        };
        let objRep = {
            magicianModel: magicianMock
        };
        let reqMock = {
            params: {}
        };
        let resMock = {
            locals:{
                magicians: {}
            }
        };

        loadAllMagiciansMW(objRep)(reqMock, resMock, function (err) {
            done();
        });
    });
});
