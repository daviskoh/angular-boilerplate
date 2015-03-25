'use strict';

module.exports = function (ptor) {

    function byDataRef() {
        var value = arguments[0],
            target = arguments[1],
            selector = '[data-ref="' + value + '"]',
            elements = (target || document).querySelectorAll(selector);

        if (elements.length) return elements;
    }

    ptor.By.addLocator('dataRef', byDataRef);

};