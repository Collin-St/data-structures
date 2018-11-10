

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //calls the helper function with a limit of 8.
  console.log(this._storage);
};

HashTable.prototype.insert = function(k, v) {
//parameters are k (key) and v (value)
	//inserting a key : value pair.
	//the value appears to be a string at the moment.
  var index = getIndexBelowMaxForKey(k, this._limit);
  //turns a string into an integer between 0 and max.
  	//max in this case is 8, because that is what this._limit is.
  	//this sets the value to a variable index.

//strategy:
	//the random number that we get for var index, is our value that 
  this._storage['John'];
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


