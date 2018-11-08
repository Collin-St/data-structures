class Queue {
  
  constructor() {
  	  this.storage = {};
  	  this.length = 0;
  	  this.pointer = 0;
  }
	enqueue(value) {
		this.storage[this.length] = value;
		this.length ++;
	};

	dequeue() {
		if (this.length - this.pointer === 0) {
			return undefined;
		};
		var output = this.storage[this.pointer];
		delete this.storage[this.pointer];
		this.pointer ++;
		return output;
	};

	size() {
	    if (this.length < 0) {
	      return 0;
	    };
	    return this.length - this.pointer;
	};

};