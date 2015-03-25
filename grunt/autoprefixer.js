'use strict';

/**
 * Autoprefixer CSS Vendor Prefixing
 */

module.exports = {
    options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        cascade: true
    },
    dev: {
        expand: true,
        flatten: true,
        src: '<%= meta.src %>/styles/css/*.css',
        dest: '<%= meta.src %>/styles/css/'
    },
    dist: {
        expand: true,
        flatten: true,
        src: '<%= meta.dist %>/styles/css/*.css',
        dest: '<%= meta.dist %>/styles/css/'
    }
};
