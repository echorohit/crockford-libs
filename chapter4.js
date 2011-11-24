
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
	this.prototype[name] = func;
	return this;
    }
};


String.method('deentityify', function () {
		  // Map entitiy names to characters sa th we can strip them out later.
		  var entity = { quot: '"', lt: '<', gt: '>'};
		  // Give back the entity-stripping code
		  return function () {		      
		      return this.replace(/&([^&;]+);/g,
					  function (a, b) {
					      var r = entity[b];
					      return typeof r === 'string' ? r : a;
					  }
					 );
		  };
}());

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
