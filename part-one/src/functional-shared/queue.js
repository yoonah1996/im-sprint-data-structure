const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {storage : {}, count : 0};
  extend(result, queueMethods);
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

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = {
    Queue,
    queueMethods
  };
}
// stackMethods.push = function(value){
//   this.storage[this.count] = value;
//   this.count++;
//   return value;
// }
// stackMethods.pop = function(){
//   let del = this.storage[this.count-1];
//   delete this.storage[this.count-1];
//   this.count--;
//   return del;
  
// }
// stackMethods.size = function(){
//   if(this.count <= 0){
//     this.count = 0;
//   } return this.count;
// }