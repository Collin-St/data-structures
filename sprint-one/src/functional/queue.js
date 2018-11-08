var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var pointer = 0;
  // var first = storage[0];
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size ++;

  };

  someInstance.dequeue = function() {
    
    // var first = storage[0];
    // delete storage[0];

    // for (var key in storage) {
    //   storage[key].size--;
    //   storage[key - 1] = storage[key];
    //   delete storage[key];
    // }
    if (size - pointer === 0) {
      return undefined;
    };

    // delete storage[size]
    var output = storage[pointer];
    delete storage[pointer];
    // size --;
    pointer ++;

    return output;


    // var first = storage[0];
    // delete first;
    // size --;
    // return first;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    };
    return size - pointer;
  };
// console.log(storage);
  return someInstance;
};
