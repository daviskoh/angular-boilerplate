module.exports = {
    dist: {

        options: {
            encoding: 'utf8',
            algorithm: 'md5',
            length: 8
        },

        src: ['<%= meta.dist %>/app/*.js']

    }
};