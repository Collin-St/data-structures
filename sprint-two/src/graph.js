

// Instantiate a new graph
var Graph = function() {
	// this.storage = {};
	this.edge = [];
	this.vertex = [];
	
	// console.log(this);

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.vertex.push(node);

	// var graph = new Graph(node);
	// this.storage = graph;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.vertex.includes(node);
	//returns a boolean


};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

	//removes from the vertex array
	this.vertex = this.vertex.filter(function(el) {
		el !== node;
	})
	//removes from the edge array
	var updatedEdgeArrayForNodeRemoval = [];
	for (let edge of this.edge) {
		let toNode = edge[0];
		let fromNode = edge[1];
		if (node !== toNode && node !== fromNode){
			updatedEdgeArrayForNodeRemoval.push(node)
		}

	}
	this.edge = updatedEdgeArrayForNodeRemoval;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

	for (let edge of this.edge) {
	//for(var ___ in ___) is only for objects, needed to use for(let ___ of ___)
		let stringifyHasEdgeArr = JSON.stringify([fromNode, toNode]);
		let stringifyEdgeArr = JSON.stringify(edge);
		if (stringifyEdgeArr === stringifyHasEdgeArr) {
			return true;
		} 
	}
	return false;
	
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.edge.push([fromNode, toNode]);
	this.edge.push([toNode, fromNode]);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	//create a new empty array for the updated edge array
	var updatedEdgeArray = [];
	//create a variable1 of the stringified[fromNode, toNode]
	var target = JSON.stringify([fromNode, toNode]);
	//create a variable2 of the stringified[toNode, fromNode]
	var reversedTarget = JSON.stringify([toNode, fromNode]);
	//iterate through the edge array
	for (var i = 0; i < this.edge.length; i++){
		//create a variable3 of the stringified elements of this.edge
		var stringifiedEdge = JSON.stringify(this.edge[i]);
		//if variable1 and variable2 does not equal variable3
		if (target !== stringifiedEdge && reversedTarget !== stringifiedEdge) {
			//push the element of this.edge that pass the "if condition" into the empty array
			updatedEdgeArray.push(this.edge[i]);
			// console.log(this.edge[i]);
		}
	}
	//set this.edge equal to the updated edge array
	this.edge = updatedEdgeArray;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	//forEach on this.vertex
	this.vertex.forEach(function(node){
		cb(node);
	})

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
