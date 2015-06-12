var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._filled = 0;
  // this._benchmark = 0.75 * this._limit;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // If filled + 1 is less than 75%, normal filling
  while(true){
    if(this._storage.get(i)){ // Checking for existence
      i++;
      if(i = this._limit)
        i = 0;
    }else{  // Case where it's not filled
      this._storage.set(i, {k : v});
      this._filled++;
      if(this._filled / this._limit >= 0.75){  // Test to see if over 75% filled
        doubleTableSize();
      }
      break;
    }
  }
};

HashTable.prototype.doubleSize = function(){
  this._limit = this._limit * 2;           // Double the Size for new LimitedArray
  var newStorage = LimitedArray(newLimit);     // Create the new LimitedArray
  this._limit = newLimit;

  this._storage.each(function(element){   // Place the old items into the new storage
    var key = Object.keys(element);
    newStorage.insert(key[0], element[key]);
  });

  // Set the current hash to the new limit & storage
  this._storage = newStorage;
}

HashTable.prototype.halfSize = function(){
  var newLimit = this._limit * 0.5;           // Double the Size for new LimitedArray
  var newStorage = LimitedArray(newLimit);     // Create the new LimitedArray
  this._limit = newLimit;

  this._storage.each(function(element){   // Place the old items into the new storage
    var key = Object.keys(element);
    newStorage.insert(key[0], element[key]);
  });

  // Set the current hash to the new limit & storage
  this._storage = newStorage;
}

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
