const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = Object.create(queueMethods);
  result.storage = {};
  result.count = 0;
  return result;
};


const queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
  return value;
}

queueMethods.dequeue = function(){
  var del = this.storage[this.count - Object.keys(this.storage).length];
  delete this.storage[this.count - Object.keys(this.storage).length];
  return del;
}

queueMethods.size = function(){
  return Object.keys(this.storage).length;
}

module.exports = {
  Queue,
  queueMethods
};
