'use strict';

module.exports = {
    scripts: {
        files: ['<%= meta.src %>/app/**/*.js'],
        tasks: ['jshint', 'test:unit'],
        options: {
            spawn: false
        }
    },
    src: {
        files: ['<%= meta.src %>/html/**/*.html', '<%= meta.src %>/index.html'],
        tasks: ['html2js']
    },
    styles: {
        files: ['<%= meta.src %>/styles/scss/**/*.scss'],
        tasks: ['sass:dev']
    },
    configFiles: {
        files: ['Gruntfile.js'],
        options: {
            reload: true
        }
    }
};
