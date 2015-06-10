var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // Make a node
    // Get the tail's point to point to the new node
    // make the tail the new node
    var newNode = Node(value);
    if(this.head === null && this.tail === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }

  };

  list.removeHead = function(){
    // Current head point to the heads next
    var returnVal = this.head.value;
    this.head = this.head.next;
    return returnVal;
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
