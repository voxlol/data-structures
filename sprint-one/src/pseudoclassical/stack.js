var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.keys = Object.keys(this.storage);
};

Stack.prototype.push = function(value){
  var length = this.keys.length;
  if(!length){
    this.storage[0+''] = value;
  }else{
    this.storage[length+''] = value;
  }

  this.keys = Object.keys(this.storage);
}

Stack.prototype.pop = function(){
  var length = this.keys.length;
  var popped;

  if(!length){
    return null;
  }else{
    popped = this.storage[length-1+''];
    delete this.storage[length-1+''];
  }

  this.keys = Object.keys(this.storage);
  return popped;
}

Stack.prototype.size = function(){
  if(this.keys.length === undefined)
    return 0;
  return this.keys.length;
}

