'use strict';

module.exports = {
    dev: [
        'newer:sass:dev'
    ],

    dist: [
        'ngdocs:all',
		'test:unit',
        'test:reports',
        'newer:sass:dist',
        'newer:copy:dist',
        'newer:html2js:app'
    ]
};
