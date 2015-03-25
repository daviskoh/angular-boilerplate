'use strict';

module.exports = function(grunt) {
    return {
        pkg: grunt.file.readJSON('package.json'),
        src: 'src',
        dist: 'dist',
        config: 'config'
    };
};
