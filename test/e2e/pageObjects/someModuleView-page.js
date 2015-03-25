'use strict';

var page = require('./common-page.js');

module.exports = function () {

    this.get = function () {
        return browser.get('/');
    };

    this.getSomeElement = page.selectorAll('dataRef', 'some-element');

};