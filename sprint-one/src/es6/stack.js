class Stack {

  constructor() {
  	this.storage = {};
  	this.length = 0;
  }
  	push(value) {
		this.storage[this.length] = value;
		this.length ++;
	};
	
	pop() {
		this.length --;
		var popped = this.storage[this.length];
		delete this.storage[this.length];
		return popped;
	};

	size() {
		if (this.length < 0) {
			return 0;
		}
		return this.length;
	};

};