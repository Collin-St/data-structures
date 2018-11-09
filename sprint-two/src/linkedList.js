var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  // console.log(list);
  list.addToTail = function(value) {
    // takes a value, adds it to end of list
  var newNode = new Node(value);
  
  //for the first invocation of addToTail
  if (list.head === null){
    list.head = newNode;
    list.tail = newNode;
    // console.log(list)
  //the rest
  } else {
    var previousTail = list.tail;
    list.tail = newNode;
    previousTail.next = newNode;
  }

  };
  // console.log(list);
  list.removeHead = function() {
    // removes the first node from the list, and returns
    // its value
    var head = list.head.value;
    list.head = list.tail;
    return head;
  };

  list.contains = function(target) {
    // returns boolean reflecting whether or not the 
    // passed-in value is in the linked list
    if (list.head === target) {
      return true;
    };

    var node = list.head;
    // console.log(node);
    while (node) {
        if (node.value === target) {
      return true;
    }
    node = node.next;
    // console.log(node);
  }
  return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    - Linear
 */
