var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {};

  queueInstance.storage = {};
  queueInstance.keys = Object.keys(queueInstance.storage);

  _.extend(queueInstance, queueMethods);
  return queueInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(item){
  var length = this.keys.length;
  if(!length){
    this.storage[0+''] = item;
  }else{
    this.storage[length+''] = item;
  }

  this.keys = Object.keys(this.storage);
}

queueMethods.size = function(){
  var length = this.keys.length;
  return !length ? 0 : length;
}

queueMethods.dequeue = function(){
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
