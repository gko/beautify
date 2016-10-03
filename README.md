# Beautify
Beautify CSS/JS/JSON/HTML/XML formats

## Installation

```bash
npm i beautify -g
```

## Usage

beautify [options]:

-h, --help             output usage information

-V, --version          output the version number

-f, --format <format>  input format.(optional) JSON/XML/HTML/JS/CSS

-o, --output <file>    output file or folder

examles:
```bash
beautify -o output.html ./test.html
```

```bash
echo '{"a": 1}' | beautify
```

```bash
echo 'body{width: "200px"}' | beautify -f css
```

You can also use it from node:

```javascript
const beautify = require('beautify');

beautify(`{"a":1}`, {format: 'json'})
```

## Tests

To run tests you simply need to do:
```bash
npm run test
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Konstantin Gorodinskiy