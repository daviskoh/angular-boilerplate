'use strict';

module.exports.config = {

    // A base URL for your application under test.
    baseUrl: 'http://' + (process.env.HTTP_HOST || 'localhost') +
    ':' + (process.env.HTTP_PORT || '3333'),

    allScriptsTimeout: 11000,

    specs: [
        '../test/e2e/scenarios/**/*.spec.js'
    ],

    multiCapabilities: [{
        'browserName': 'chrome',
        'build': process.env.version,
        'name': 'Protractor suite tests'
    }],

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
        require('../test/e2e/utils/dataRef-locator.js')(protractor);
    }
};
