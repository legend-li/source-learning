'use strict';

const utils = require('@hdcq/utils');

console.log("isObject result:", utils.isObject({}));
const res = utils.isObject;
console.log("res:", res);

for (const k in utils) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = utils[k];
}
