'use strict';

angular.module('myMod.common', [])
    .controller('MainController', MainController);

// @ngInject
function MainController($log) {
    /* jshint validthis: true */
    var vm = this;

    vm.userName = "Bob";

    vm.add2 = function (num) {
        $log.info('Adding', num);
        return num + 2;
    };
}
