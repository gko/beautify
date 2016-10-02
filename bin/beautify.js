#!/usr/bin/env node

'use strict';

const app = require('commander');
const cfg = require('../package.json');
const beautify = require('../index');
const path = require('path');
const fs = require('fs');

app.version(cfg.version)
    .option('-f, --format <format>', 'input format.(optional)', /^(css|json|js|html|xml)$/, 'json')
    .option('-o, --output <file>', 'output file or folder')
    .description('prettify js/json, html/xml or css')

app.parse(process.argv);

if(app.args.length) {
    fs.readFile(app.args[0], 'utf8', (err, data) => {
        if (err) throw err;

        let b = beautify(data, {
            format: (app.format||path.extname(app.args[0]).substring(1)).toLowerCase()
        });

        console.log(b);
    });
} else {
    let data = '';

    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    process.stdin.on('data', function(chunk) {
        data += chunk;
    });

    process.stdin.on('end', function() {
        let b = beautify(data, {
            format: app.format.toLowerCase()
        });

        console.log(b);
    });
}
