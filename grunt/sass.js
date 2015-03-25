'use strict';

/**
 * Compile Sass
 */

module.exports = {
    dev: {
        options: {
            style: 'expanded'
        },
        files: [{
            expand: true,
            cwd: '<%= meta.src %>/styles/scss',
            src: ['*.scss'],
            dest: '<%= meta.src %>/styles/css',
            ext: '.css'
        }]
    },
    dist: {
        options: {
            style: 'compressed'
        },
        files: [{
            expand: true,
            cwd: '<%= meta.src %>/styles/scss',
            src: ['*.scss'],
            dest: '<%= meta.dist %>/styles/css',
            ext: '.css'
        }]
    }
};
