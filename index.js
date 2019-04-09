"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var ArrNotArr_1 = require("@writetome51/is-array-not-array");


function errorIfNotPrimitiveOrArray(arg) {
	var primitives = ['number', 'string', 'boolean'];
	if (!(primitives.includes(typeof arg)) && ArrNotArr_1.notArray(arg)) {
		throw new Error('Input must be either a primitive type or an array');
	}
}
exports.errorIfNotPrimitiveOrArray = errorIfNotPrimitiveOrArray;
