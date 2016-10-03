# Beautify
Beautify CSS/JS/JSON/HTML/XML formats

## Installation

`npm i beautify -g`

## Usage

beautify [options]:

-h, --help             output usage information
-V, --version          output the version number
-f, --format <format>  input format.(optional)
-o, --output <file>    output file or folder

examles:
`beautify -o output.html ./test.html`

`echo '{"a": 1}' | beautify`

`echo 'body{width: "200px"}' | beautify -f css`

## Tests

To run tests you simply need to do:
`npm run test`

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Konstantin Gorodinskiy