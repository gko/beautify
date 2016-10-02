'use strict';

const jsBeautify = require('js-beautify').js_beautify;
const cssbeautify = require('cssbeautify');
const html = require('html').prettyPrint;

let files = [];

let beautify = (data, o) => {
    data = data.trim();

    if(~['"', "'"].indexOf(data[0]))
        data = data.substring(1);

    if(~['"', "'"].indexOf(data[data.length - 1]))
        data = data.substring(0, data.length - 1);

    switch(o.format) {
        case 'css':
            return cssbeautify(data, {
                indent: '    ',
            });
        case 'json': case 'js':
            return jsBeautify(data, {
                indent_size: 4
            });
        case 'html': case 'xml':
            return html(data);
    }
};

module.exports = beautify;
