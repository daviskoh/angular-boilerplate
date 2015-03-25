'use strict';

describe('myMod App', function () {

    var $state;

    beforeEach(module('myMod'));

    beforeEach(inject(function (_$state_) {
        $state = _$state_;
    }));

    it('should configure the base route', function () {

        expect($state).toBeTruthy();

    });

});
