// Instantiate a new graph
const Graph = function() {
    this.array = [];

};


const Node = function(value) {
    this.value = value;
    this.next = null;
  };

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    let index = new Node(node);
    this.array.push(index);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    for(let i=0; i< this.array.length; i++){
        if(this.array[i].value === node) return true;
    }
    return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    this.array = this.array.filter(x => x.value !== node);
    for(let i = 0; i <this.array.length; i++){
        if(this.array[i][node]){
            delete this.array[i][node];
        }
    }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    for(let i=0; i< this.array.length; i++){
        if(this.array[i].value === fromNode){
            if(this.array[i][toNode] === true) return true;
        }
    }
    return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    for(let i=0; i< this.array.length; i++){
        if(this.array[i].value === fromNode){
            this.array[i][toNode] = true;
        }
    }
    for(let i=0; i< this.array.length; i++){
        if(this.array[i].value === toNode){
            this.array[i][fromNode] = true;
        }
    }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    for(let i=0; i< this.array.length; i++){
        if(this.array[i].value === fromNode){
            delete this.array[i][toNode];
        }
    }
    for(let i=0; i< this.array.length; i++){
        if(this.array[i].value === toNode){
            delete this.array[i][fromNode];
        }
    }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for(let i=0; i<this.array.length; i++){
        cb(this.array[i].value);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Graph;
