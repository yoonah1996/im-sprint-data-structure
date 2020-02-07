
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
  var result = {storage : {}, count : 0};
  result = Object.create(stackMethods);
  return result;
};

module.exports = {
  Stack,
  stackMethods
};
