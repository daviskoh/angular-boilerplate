'use strict';

describe('myMod.common.MainController', function () {
    var ctrl,
        $scope;

    beforeEach(module('myMod.common'));

    beforeEach(inject(function ($controller, $log, $rootScope) {
        $scope = $rootScope.$new();

        ctrl = $controller('MainController', {
            $scope: $scope,
            $log: $log
        });
    }));

    it('controller should exist', function () {
        expect(ctrl).toBeTruthy();
    });
});
