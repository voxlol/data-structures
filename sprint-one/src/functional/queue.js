var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keys = Object.keys(storage);

  // Implement the methods below

  someInstance.enqueue = function(value){
    var length = keys.length;
    if(length > 0){
      storage[length+''] = value;
    }
    else{
      storage[0 + ''] = value;
    }
    keys = Object.keys(storage);

  };

  someInstance.dequeue = function(){
    var retValue = storage[0 + ''];
    delete storage[0+''];
    for(var key in storage){
      var temp = storage[key];
      storage[(key-1) + ''] = temp;
      delete storage[key];
    }
    keys = Object.keys(storage);
    return retValue;
  };

  someInstance.size = function(){
    return keys.length;
  };

  return someInstance;
};
