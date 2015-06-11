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
  debugger;
  if(this.value === target){
    return true;
  }else{
    if(this.children){
      return _.reduce(this.children, function(found, child){
        return found || child.contains(target);
      }, false);
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
