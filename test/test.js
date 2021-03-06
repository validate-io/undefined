/* global require, describe, it */
'use strict';

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

	it( 'should export a function', function test() {
		expect( isUndefined ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var val;
		assert.ok( isUndefined( val ) );
		assert.ok( isUndefined( undefined ) );
		assert.ok( isUndefined( void 0 ) );
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
