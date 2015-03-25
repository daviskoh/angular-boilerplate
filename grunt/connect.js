'use strict';
/**
 * The `connect` task starts a connect server
 */

function middleware(connect, options, middlwares) {
    return [
        connect.compress(),
        connect.static(options.base)
    ];
}

module.exports = function (grunt) {
    return {
        app: {
            options: {
                port: 3333,
                hostname: '*',
                base: '<%= meta.src %>',
                middleware: middleware
            }
        },
        dist: {
            options: {
                port: 3333,
                hostname: '*',
                keepalive: true,
                base: '<%= meta.dist %>',
                middleware: middleware
            }
        },
        docs: {
            options: {
                port: 4444,
                base: 'docs'
            }
        }
    }
};
