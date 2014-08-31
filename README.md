undefined
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is undefined.


## Installation

``` bash
$ npm install validate.io-undefined
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var lib = require( 'validate.io-undefined' );
```


## Examples

``` javascript
var lib = require( 'validate.io-undefined' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-undefined.svg
[npm-url]: https://npmjs.org/package/validate.io-undefined

[travis-image]: http://img.shields.io/travis/validate-io/undefined/master.svg
[travis-url]: https://travis-ci.org/validate-io/undefined

[coveralls-image]: https://img.shields.io/coveralls/validate-io/undefined/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/undefined?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/undefined.svg
[dependencies-url]: https://david-dm.org/validate-io/undefined

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/undefined.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/undefined

[github-issues-image]: http://img.shields.io/github/issues/validate-io/undefined.svg
[github-issues-url]: https://github.com/validate-io/undefined/issues