'use strict';

/**
 * App Bootstrapper
 * Call in remote API Config, and set to constant
 * Load main app into document when successful
 */

angular.element(document).ready(function () {
    // App Config
    var appName = 'myMod',
        configUrl = '/config.json';

    // Create angular $http function
    var initInjector = angular.injector(['ng']),
        $http = initInjector.get('$http'),
        $log = initInjector.get('$log') || window.console;

    // App Loader function
    var appLoader = function (api) {
        var _api = {};

        // Create Constant
        angular.module(appName).constant('api', angular.extend(_api, api));

        // Run Angular App
        angular.bootstrap(document, [appName]);
    };

    // Get the API config, and run the app loader bootstrapper
    $http.get(configUrl)
        .success(function (response) {
            // Build new object with full API url
            var api = {
                "endpoint": '//' + response.endpoint,
                "environment": response.environment,
            };

            appLoader(api);
        })
        .error(function (error) {
            $log.error("ERROR: Could not load configuration. Defaulting to local environment.");

            // API call failed, so let's assume we're running locally
            var api = {
                "endpoint": '',
                "environment": "int"
            };

            appLoader(api);
        });
});
