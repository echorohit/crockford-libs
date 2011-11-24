// The functional changes that are useful go in here

// Import chapter1.js

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
	var F = function () {};
	F.prototype = o;
	return new F();
};
