
Function.method('inherits', function (Parent) {
		    this.prototype = new Parent();
		    return this;
		});
Object.method('superior', function (name) {
		  var that = this,
                      method = that[name];
		  return function () {		      
		      return method.apply(that, arguments);
		  };
});