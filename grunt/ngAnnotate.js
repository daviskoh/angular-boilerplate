'use strict';

/**
 * Angular Friendly Minification
 */

module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= meta.dist %>/app',
            src: '*.js',
            dest: '<%= meta.dist %>/app'
        }]
    }
};
