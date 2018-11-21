var BinarySearchTree = function(value) {
  
  var newTree = {};
  
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;
  

  _.extend(newTree, bstMethods);
  return newTree;

};

var bstMethods = {};

bstMethods.insert = function(value) {
  
  if (value > this.value) {
   if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  
}

bstMethods.contains = function(target) {

  if (target === this.value) {
    return true;
  } if (target > this.value && this.right !== null) {
    return this.right.contains(target);

  } else if (target < this.value && this.left !== null) {
    return this.left.contains(target);
  }
  return false; 

}

bstMethods.depthFirstLog = function(func) {

  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 */