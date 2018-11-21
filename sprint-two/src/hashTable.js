// <<<<<<< HEAD
// =======
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

// >>>>>>> a746dc4a6786b3424adb6730cc9f269277101b39
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //calls the helper function with a limit of 8.
  // console.log(this._storage);
};

HashTable.prototype.insert = function(k, v) {
//parameters are k (key) and v (value)
  //inserting a key : value pair.
  //the value appears to be a string at the moment.
  var index = getIndexBelowMaxForKey(k, this._limit);
  //turns a string into an integer between 0 and max.
  //max in this case is 8, because that is what this._limit is.
  //this sets the value to a variable index.
  // console.log(index);
  //strategy:
  //the random number that we get for var index, is our value that 
  var storageArray = this._storage.get(index);
  if (storageArray === undefined) {
    this._storage.set(index, [[k, v]]);
  } else if (storageArray[0][0] === k) {
    storageArray[0][1] = v;
  } else {
    storageArray.push([k, v]);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var storageArray = this._storage.get(index);
  for (var i = 0; i < storageArray.length; i++) {
    if (storageArray[i][0] === k) {
      return storageArray[i][1];
    }
  }
  // if (storageArray) {
  //   return storageArray[1];
  // } else {
  //   return storageArray[1];
  // }
  // return this._storage.get(index)[1];
  
  
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var storageArray = this._storage.get(index);
  
  for (var i = 0; i < storageArray.length; i++) {
    if (storageArray[i][0] === k) {
      storageArray.splice(i, 1);
    }
  }
  
  // console.log(storageArray);
  
  

};



/*
 * Complexity: What is the time complexity of the above functions?
 */