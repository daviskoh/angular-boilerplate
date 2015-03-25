'use strict';

module.exports = {
    options: {
        banner: '(function () {\n"use strict";\n',
        footer: '})();',
        separator: '\n',
        process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' + src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        }
    }
};
