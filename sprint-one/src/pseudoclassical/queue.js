var Queue = function(){

  this.storage = {};
  this.keys = Object.keys(this.storage);

};

Queue.prototype.enqueue = function(item){
  var length = this.keys.length;
  if(!length){
    this.storage[0+''] = item;
  }else{
    this.storage[length+''] = item;
  }

  this.keys = Object.keys(this.storage);
}

Queue.prototype.size = function(){
  var length = this.keys.length;
  return !length ? 0 : length;
}

Queue.prototype.dequeue = function(){
  var length = this.keys.length;
  var retVal;
  if(length){
    retVal = this.storage[0+''];
    delete this.storage[0+''];
    for(var key in this.storage){
      this.storage[key-1+''] = this.storage[key];
      delete this.storage[key];
    }
  }

  this.keys = Object.keys(this.storage);
  return retVal;
}

/*
queueMethods.updateKeys = function(){
}*/
