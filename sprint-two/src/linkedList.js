//Implements a doubly linked list

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addtoHead = function(value){
    var newNode = Node(value);
    if(this.head === null && this.tail === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }

  };

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
      this.tail.next.previous = this.tail;
      this.tail = newNode;
    }
  };

  list.removeHead = function(){
    // Current head point to the heads next
    var returnVal = this.head.value;
    this.head = this.head.next;
    this.head.previous.next = null;
    this.head.previous = null;
    return returnVal;
  };


  list.removeTail = function(){
    this.tail = this.tail.previous;
    this.tail.next.previous = null;
    this.tail.next = null;

  };


  list.contains = function(target){
    //debugger;
    var currentNode = this.head;
    var isLast = false;
    while(!isLast){
      if(currentNode.value === target){
        return true;
      }
      if(currentNode.next === null){
        isLast=true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  next.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
