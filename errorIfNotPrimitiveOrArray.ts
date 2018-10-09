import { notArray } from 'basic-data-handling/isArray_notArray';


export function errorIfNotPrimitiveOrArray(value) {
	let primitives = ['number', 'string', 'boolean'];
	if (!(primitives.includes(typeof value)) && notArray(value)) {
		throw new Error('Input must be either a primitive type or an array');
	}
}
