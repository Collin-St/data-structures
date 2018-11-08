var Queue = function() {

  var someInstance = Object.create(queueMethods);
  	  someInstance.storage = {};
  	  someInstance.length = 0;
  	  someInstance.pointer = 0;

  // someInstance.enqueue = queueMethods.enqueue;
  // someInstance.dequeue = queueMethods.dequeue;
  // someInstance.size = queueMethods.size;

  return someInstance;
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.length] = value;
	this.length ++;
};

queueMethods.dequeue = function() {
	if (this.length - this.pointer === 0) {
		return undefined;
	};
	var output = this.storage[this.pointer];
	delete this.storage[this.pointer];
	this.pointer ++;
	return output;
};

queueMethods.size = function() {
    if (this.length < 0) {
      return 0;
    };
    return this.length - this.pointer;
};
