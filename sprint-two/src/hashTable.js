//Implements a Hash Table with open addressing, linear probing, and dynamic resizing algorithms

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._filled = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  while(true){
    if(this._storage.get(i)){     // Check if index is full
      i++;                        // Probe linearly with a stepsize of 1
      if(i === this._limit)
        i = 0;
    }else{                        // If index empty, insert
      var insertObj = {};
      insertObj[k] = v;
      this._storage.set(i, insertObj);
      this._filled++;
      if(this._filled / this._limit >= 0.75){        // Double size if over 75% full after adding new element
        this.resize(2);
      }
      break;
    }
  }
};

HashTable.prototype.resize = function(scale){
  // Create a new temporary hashtable
  var tempHashTable = new HashTable();
  tempHashTable._limit = this._limit * scale;
  tempHashTable._storage = LimitedArray(tempHashTable._limit);

  this._storage.each(function(element){   // Place the old items into the new storage
    if(element !== null && element !== undefined){
      var key = Object.keys(element);
      if(key > 0){
        tempHashTable.insert(key[0], element[key]);
      }
    }
  });
  // Set the current hash to the new limit & storage
  this._storage = tempHashTable._storage;
  this._limit = tempHashTable._limit;
}

HashTable.prototype.retrieve = function(k){
  var temp = null;
  this._storage.each(function(element){
    for(var key in element){
      if(key === k){
        temp = element[k];
      }
    }
  });
  return temp;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, {});
  this._filled--;
  if(this._filled / this._limit < 0.25){      // If less than 25% filled, reduce size by half
    this.resize(0.5);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
