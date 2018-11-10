var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; 
  set.count = 0;
  set.testingArray = []
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	//takes a string and adds it to the set.
	// item = new Set();
	// this.storage[this.count] = item;
	this.count++;
	this.storage[this.count] = item;
	// this.count++;
	
};

setPrototype.contains = function(item) {
	//takes a string and returns a boolean reflecting on whether it can be found in the set.
	this.testingArray = Object.values(this.storage);
	return this.testingArray.includes(item);
// 	console.log(testingArray)
// 	var check = false;
// 	if (this.storage[this.count] === item) {
// 		return check = true;
// 	} else {
// 	var check = false;

// 		for (var key in this.storage[this.count]) {
// 			if (this.storage[this.count].contains(item)) {
// 				return check = true;
			
// 		} else {
// 			return check = false;
// 		}
// 		// return check;
// 	}
// 	return check;
};

setPrototype.remove = function(item) {
	//takes a string and removes it from the set if it is present.

// this does not work for multiple additions/removals because
//	the if statement is count-specific, so the item deleted is only 
//	the most recent addition
	// if (this.storage[this.count] === item) {
	// 	delete this.storage[this.count];
	// 	this.count --;
	// }
	
// this fixes that
	for (var key in this.storage) {
		if (this.storage[key] === item) {
			delete this.storage[key];
			this.count --;
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
