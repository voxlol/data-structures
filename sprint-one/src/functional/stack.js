var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keys = Object.keys(storage);

  // Implement the methods below
  someInstance.push = function(value){
    var length = keys.length;
    if(length <= 0 || length === null){
      storage[0 + ''] = value;
    }
    else{
      storage[length+''] = value;
    }
    keys = Object.keys(storage);
  };

  someInstance.pop = function(){
    var length = keys.length;
    var returnValue;
    if(length){
      returnValue = storage[(length-1)+''];
      delete storage[(length-1)+''];
    }

    keys = Object.keys(storage);
    return returnValue;
  };

  someInstance.size = function(){
    return keys.length;
  };

  return someInstance;
};
