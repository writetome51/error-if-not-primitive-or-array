"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");

function errorIfNotPrimitiveOrArray(value) {
	var primitives = ['number', 'string', 'boolean'];
	if (!(primitives.includes(typeof value)) && isArray_notArray_1.notArray(value)) {
		throw new Error('Input must be either a primitive type or an array');
	}
}

exports.errorIfNotPrimitiveOrArray = errorIfNotPrimitiveOrArray;
