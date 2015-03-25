'use strict';

module.exports = {
    dist: {
        options: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeCommentsFromCDATA: true,
            removeOptionalTags: true
        },
        files: [{
            expand: true,
            cwd: '<%= meta.dist %>',
            src: [
                'html/**/*.html',
                'index.html'
            ],
            dest: '<%= meta.dist %>'
        }]
    }
};
