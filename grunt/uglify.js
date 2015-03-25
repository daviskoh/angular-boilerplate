'use strict';

module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= meta.dist %>/app',
            src: '*.js',
            dest: '<%= meta.dist %>/app'
        }]
    },
    options: {
        mangle: true,
        compress: true,
        sourceMap: true
    }
};
