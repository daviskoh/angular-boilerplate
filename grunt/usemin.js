/**
 * Usemin
 */

module.exports = {
    html: ['<%= meta.dist %>/{,*/}*.html'],
    options: {
        blockReplacements: {
            js: function (block) {
                // Copy any data- attribs onto the dest script block
                var matches, i = 0, len = block.raw.length,
                    reg = /(data-[\a-z-]+="[\w-]+")/gm,
                    dataAttribs = [];

                for (; i < len; i++) {
                    matches = (block.raw[i] || '').match(reg);
                    if (matches && matches.length) {
                        dataAttribs.push.apply(dataAttribs, matches);
                    }
                }

                return '<script src="' + block.dest + '" ' + dataAttribs.join(' ') + '></script>';
            }
        }
    }
};
