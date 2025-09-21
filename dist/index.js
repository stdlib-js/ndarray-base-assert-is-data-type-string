/** @license Apache-2.0 */

'use strict';

/**
* Test whether an input value is a supported built-in ndarray data type string.
*
* @module @stdlib/ndarray-base-assert-is-data-type-string
*
* @example
* var isDataTypeString = require( '@stdlib/ndarray-base-assert-is-data-type-string' );
*
* var bool = isDataTypeString( 'binary' );
* // returns true
*
* bool = isDataTypeString( 'float32' );
* // returns true
*
* bool = isDataTypeString( 'float64' );
* // returns true
*
* bool = isDataTypeString( 'generic' );
* // returns true
*
* bool = isDataTypeString( 'int16' );
* // returns true
*
* bool = isDataTypeString( 'int32' );
* // returns true
*
* bool = isDataTypeString( 'int8' );
* // returns true
*
* bool = isDataTypeString( 'uint16' );
* // returns true
*
* bool = isDataTypeString( 'uint32' );
* // returns true
*
* bool = isDataTypeString( 'uint8' );
* // returns true
*
* bool = isDataTypeString( 'uint8c' );
* // returns true
*
* bool = isDataTypeString( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
