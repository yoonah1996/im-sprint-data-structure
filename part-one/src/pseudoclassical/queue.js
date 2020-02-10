const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
  return value;
}

Queue.prototype.dequeue = function(){
  var del = this.storage[this.count - Object.keys(this.storage).length];
  delete this.storage[this.count - Object.keys(this.storage).length];
  return del;
}

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
}

module.exports = {
  Queue
};
