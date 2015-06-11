var BinarySearchTree = function(value){
  var tree = Object.create(bsTreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

bsTreeMethods = {};

bsTreeMethods.depthFirstLog = function(func){
  func(this.value);
  if(this.left){
    this.left.depthFirstLog(func);
  }
  if(this.right){
    this.right.depthFirstLog(func);
  }

};

bsTreeMethods.contains = function(target){
  //debugger;
  if(this.value === target)
   return true;
  else{
    if(this.right && target > this.value){
      return this.right.contains(target);
    }else if(this.left && target < this.value){
      return this.left.contains(target);
    }else{
      return false;
    }
  }
};

bsTreeMethods.insert = function(value){
  //debugger;
  var newTree = BinarySearchTree(value);
  //var pointer = this;
  // base case 1, left/right
  if(this.right === null && newTree.value > this.value){   // reaches end and is greater
    this.right = newTree;
  }else if(this.left === null && newTree.value < this.value){ // reaches end and is lower
    this.left = newTree;
  }else{
    // still traversing
    if(newTree.value > this.value){
      this.right.insert(value);
    }
    if(newTree.value < this.value){
      this.left.insert(value);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
