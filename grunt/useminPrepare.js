'use strict';

module.exports = {
    html: '<%= meta.src %>/index.html',
    options: {
        dest: '<%= meta.dist %>',
        flow: {
            html: {
                steps: {
                    js: ['concat']
                },
                post: {}
            }
        }
    }
};
