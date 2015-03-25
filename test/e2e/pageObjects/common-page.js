'use strict';

var isElementPresent = browser.driver.isElementPresent.bind(browser.driver);

function createSelectorFn(elFn, meth, query) {
    return function (extraSelector) {
        var elMeth = elFn ? element[elFn] : element,
            byMeth = by[meth ? meth : 'dataRef'],
            q = query + (extraSelector ? extraSelector : ''),
            r = elMeth(byMeth(q));
        return r;
    };
}

var api = {
    selector: createSelectorFn.bind(null, null),
    selectorAll: createSelectorFn.bind(null, 'all'),
    clickElement: function (dataRef) {
        api.selector('dataRef', dataRef)().click();
    },
    inputKeys: function (dataRef, keys) {
        api.selector('dataRef', dataRef)().sendKeys(keys);
    },
    findElement: function (dataRef) {
        return api.selector('dataRef', dataRef)();
    }
};

module.exports = api;