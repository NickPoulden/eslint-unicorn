'use strict';

function emptyObjectSelector(path) {
	const prefix = `${path}.`;
	return [
		`[${prefix}type="ObjectExpression"]`,
		`[${prefix}properties.length=0]`
	].join('');
}

module.exports = emptyObjectSelector;
