'use strict';

angular.module('myMod', [
    'ui.router',
    'myMod.templates',
    'myMod.common'
])

// Configure states
.config(configStates);

// @ngInject
function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/views/main.tpl.html',
            controller: 'MainController',
            controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise('/');
}