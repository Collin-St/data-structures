var Stack = function() {

	var someInstance = {
		storage: {},
		length: 0
	};
	// someInstance.storage = {};
	// someInstance.size = 0;
	// var size = 0;
	someInstance.push = stackMethods.push;
	someInstance.pop = stackMethods.pop;
	someInstance.size = stackMethods.size;

	return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.length] = value;
	this.length ++;
};
stackMethods.pop = function() {
	this.length --;
	var popped = this.storage[this.length];
	delete this.storage[this.length];
	return popped;
};
stackMethods.size = function() {
	if (this.length < 0) {
		return 0;
	}
	return this.length;
};

