"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var errorIfNotPrimitiveOrArray = require("./index").errorIfNotPrimitiveOrArray;

errorIfNotPrimitiveOrArray([]); // must not error.
console.log('test 0 passed');


let errorTriggered = false;
try {
	errorIfNotPrimitiveOrArray({});
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1 passed');
else console.log('test 1 FAILED');


errorTriggered = false;
let strObject = new String('hello'); // String(), if called with 'new', creates object.
try {
	errorIfNotPrimitiveOrArray(strObject);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');


errorTriggered = false;
try {
	errorIfNotPrimitiveOrArray(-10);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 FAILED');
else console.log('test 3 passed');


errorTriggered = false;
try {
	errorIfNotPrimitiveOrArray(NaN);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 FAILED');
else console.log('test 4 passed');


errorTriggered = false;
try {
	errorIfNotPrimitiveOrArray(false);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 FAILED');
else console.log('test 5 passed');


errorTriggered = false;
try {
	errorIfNotPrimitiveOrArray('a');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 FAILED');
else console.log('test 6 passed');

