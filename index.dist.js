'use strict';

var jsBeautify = require('js-beautify').js_beautify;

var cssbeautify = require('cssbeautify');

var html = require('html').prettyPrint;

var files = [];

var clean = function clean(data) {
  if (~['"', "'"].indexOf(data[0]) && ~['"', "'"].indexOf(data[data.length - 1]) && data[0] === data[data.length - 1]) {
    return data.substring(1, data.length - 1);
  }

  return data;
};

var beautify = function beautify(data, o) {
  if (!data || !data.length) return '';
  data = clean(data.trim());

  switch (o.format) {
    case 'css':
      return cssbeautify(data, {
        indent: '    ',
        autosemicolon: true
      });

    case 'json':
    case 'js':
      return jsBeautify(data, {
        indent_size: 4
      });

    case 'html':
    case 'xml':
      return html(data);
  }
};

module.exports = beautify;
