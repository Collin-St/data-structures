var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // console.log(storage);
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size ++;
  };

  someInstance.pop = function() {
    size --;
    return storage[size];
  };

  someInstance.size = function() {
    // return size;
    if (size < 0) {
      return 0;
    }
    return size;
  };
  
  return someInstance;
};
