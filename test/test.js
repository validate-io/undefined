
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isUndefined = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-undefined', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( isUndefined ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isUndefined( undefined ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				[],
				'5',
				function(){},
				null,
				{},
				NaN,
				true
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isUndefined( values[i] ) );
		}
	});

});