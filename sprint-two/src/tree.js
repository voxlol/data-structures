var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }else{

  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
