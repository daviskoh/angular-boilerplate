'use strict';

module.exports = {
    dist: [
        'dist',
        '*.log',
        '.tmp',
        '<%= meta.src %>styles/css/*',
        '.sass-cache',
        'reports',
        'docs',
        'coverage'
    ]
};
