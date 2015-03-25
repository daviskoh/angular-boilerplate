'use strict';
var Page = require('../pageObjects/someModuleView-page.js');

describe('when valid results are displayed', function () {
    var page = new Page(),
        query = "staples";

    beforeEach(function (done) {
        page.get().then(done);
    });

    describe('when clicking the X', function () {

        it('should clear all results', function () {
            page.getSomeElement().sendKeys(query);
            expect(page.getListingsRows().count()).toBe(19);
        });

    });

});
