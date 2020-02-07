var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

const stackMethods = {};
stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
  return value;
}
stackMethods.pop = function(){
  let del = this.storage[this.count-1];
  delete this.storage[this.count-1];
  this.count--;
  return del;
  
}
stackMethods.size = function(){
  if(this.count <= 0){
    this.count = 0;
  } return this.count;
}

const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = { storage: {}, count: 0 };
  
  extend(result, stackMethods);
  return result;
};

if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = {
    Stack,
    stackMethods
  };
}

//push
//pop
//size