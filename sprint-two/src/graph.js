

var Graph = function(){
  this.graphInstance = {}
};

Graph.prototype.addNode = function(node){
  if(!(node in this.graphInstance)){
    this.graphInstance[node] = [];
  }
};

Graph.prototype.contains = function(node){
  return this.graphInstance[node] === undefined ? false : true;
};

Graph.prototype.removeNode = function(node){
  var neighbors = this.graphInstance[node];
  _.each(neighbors, function(neighbor){
    this.graphInstance[neighbor] = _.without(this.graphInstance[neighbor], node);
  });
  delete this.graphInstance[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this.graphInstance[fromNode], toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.graphInstance[fromNode].push(toNode);
  this.graphInstance[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this.graphInstance[fromNode] = _.without(this.graphInstance[fromNode], toNode);
  this.graphInstance[toNode] = _.without(this.graphInstance[toNode], fromNode);

};

Graph.prototype.forEachNode = function(cb){
  _.each(this.graphInstance, function(value, key){
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



