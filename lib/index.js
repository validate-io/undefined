/**
*
*	VALIDATE: undefined
*
*
*	DESCRIPTION:
*		- Validates if a value is undefined.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: isUndefined( value )
	*	Validates if a value is undefined.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is undefined
	*/
	function isUndefined( value ) {
		return ( typeof value === 'undefined' );
	} // end FUNCTION isUndefined()


	// EXPORTS //

	module.exports = isUndefined;

})();