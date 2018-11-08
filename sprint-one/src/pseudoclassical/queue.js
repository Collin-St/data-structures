var Queue = function() {

  	  this.storage = {};
  	  this.length = 0;
  	  this.pointer = 0;

};

Queue.prototype.enqueue = function(value) {
	this.storage[this.length] = value;
	this.length ++;
};

Queue.prototype.dequeue = function() {
	if (this.length - this.pointer === 0) {
		return undefined;
	};
	var output = this.storage[this.pointer];
	delete this.storage[this.pointer];
	this.pointer ++;
	return output;
};

Queue.prototype.size = function() {
    if (this.length < 0) {
      return 0;
    };
    return this.length - this.pointer;
};
