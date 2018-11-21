var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = []; 
  extend(newTree, treeMethods);
  //copies treeMethods into newTree
  // console.log(newTree);
  return newTree;
};

var extend = function(obj, methods) {
	for (var key in methods) {
		obj[key] = methods[key];
	}
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	//make a new tree
	//add the child to tree/child array
	// console.log(this);
	// console.log(newTree);
	this.children.push(new Tree(value));

};

treeMethods.contains = function(target) {
	
	var foundChild = false;
	if (this.value === target) {
		foundChild = true;
	} else {
		for(var i = 0; i < this.children.length; i++) {
			if(this.children[i].contains(target)) {
				foundChild = true;
			}
		}
	} 
	return foundChild;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
