'use strict';

module.exports = {
    dist: {
        expand: true,
        cwd: '<%= meta.src %>',
        src: [
            '*.html'
        ],
        dest: '<%= meta.dist %>'
    }
};
