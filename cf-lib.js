
// From Chapter 3.
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
	var F = function () {};
	F.prototype = o;
	return new F();
};


// Version from Chapter 4.
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
	this.prototype[name] = func;
	return this;
    }
};


// Now if only I knew how to set up auto-currying a la Haskell
Function.method('curry', 
		function () {
		    var slice = Array.prototype.slice,
		        args = slice.apply(arguments),
		        that = this;
		    return function () {
			return that.apply(null, args.concat(slice.apply(arguments)));
		    };
		});

// String method augmentation
String.method('integer', function () {
		  return Math[this < 0 ? 'ceil' : 'floor'](this);
	      });


String.method('trim', function () {
		  return this.replace(/^\s+|\s+$/g, '');
	      });

