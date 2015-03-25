module.exports = {
    tasks: {
        options: {
            filter: 'include',
            tasks: [
                'clean',
                'jshint',
                'sass',
                'test:unit',
                'test:unit:watch',
                'test:e2e:local',
                'serve',
                'docs',
                'dist'
            ],
            groups: {
                'Testing tasks': [
                    'test:reports',
                    'test:unit',
                    'test:unit:watch',
                    'test:e2e:local'
                ]
            }
        }
    }
};
