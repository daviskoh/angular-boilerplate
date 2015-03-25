module.exports = function (grunt) {
    /**
     * Import Task Packages
     */

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt);


    /**
     * Testing tasks
     */
    grunt.registerTask('test:unit', 'run unit tests', [
        'html2js',
        'jshint',
        'karma:unit'
    ]);

    grunt.registerTask('test:unit:watch', 'run unit tests continuously, watching for changes', [
        'html2js',
        'karma:watch'
    ]);

    grunt.registerTask('test:reports', 'run unit & coverage tests and output results to ./reports', [
        'html2js',
        'karma:reports'
    ]);

    grunt.registerTask('test:e2e:local', 'run e2e tests using localhost against a local browser', [
        'shell:webdriver-update',
        'if-missing:curl:selenium',
        'protractor:e2e-local'
    ]);

    /**
     * Build & serve tasks
     */
    grunt.registerTask('serve', 'builds dev Sass, and runs a dev server on localhost:3333', [
        'concurrent:dev',
        'jshint',
        'test:unit',
        'connect:app',
        'watch'
    ]);

    grunt.registerTask('docs', 'create and serve the docs on port 4444', [
        'ngdocs',
        'connect:docs',
        'watch'
    ]);

    grunt.registerTask('dist', 'builds dist folder with fully optimised files', [
        'clean:dist',
        'concurrent:dist',
        'autoprefixer:dist',
        'useminPrepare',
        'concat:generated',
        'filerev:dist',
        'usemin',
        'htmlmin',
        'ngAnnotate:dist',
        'ngie',
        'es3_safe_recast:dist',
        'uglify:dist'
    ]);

    grunt.registerTask('default', ['availabletasks']);

};
