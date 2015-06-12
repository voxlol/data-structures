var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._filled = 0;
  // this._benchmark = 0.75 * this._limit;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
//  if(i===15)debugger;
  // If filled + 1 is less than 75%, normal filling

  while(true){
    if(this._storage.get(i)){ // Checking for existence
      i++;
      if(i === this._limit)
        i = 0;
    }else{  // Case where it's not filled
      var insertObj = {};
      insertObj[k] = v;
      this._storage.set(i, insertObj);
      this._filled++;
      if(this._filled / this._limit >= 0.75){  // Test to see if over 75% filled
        this.resize(2);
      }
      break;
    }
  }
};

HashTable.prototype.resize = function(scale){
  //this._limit = this._limit * scale;           // Double the Size for new LimitedArray
//  var newStorage = LimitedArray(this._limit);     // Create the new LimitedArray
  var tempHashTable = new HashTable();
  tempHashTable._limit = this._limit * scale;
  tempHashTable._storage = LimitedArray(tempHashTable._limit);

  this._storage.each(function(element){   // Place the old items into the new storage
    if(element !== null && element !== undefined){
      var key = Object.keys(element);
      if(key.length > 0){
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

  /*

  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined) return null;
  return this._storage.get(i)[k];*/
};

HashTable.prototype.remove = function(k){
  if(k === "George")
    debugger;
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, {});
  this._filled--;
  if(this._filled / this._limit < 0.25){  // Test to see if over 75% filled
    this.resize(0.5);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
