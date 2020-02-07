const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
    return storage[count -1];
  };

  someInstance.pop = function() {
    let delword = storage[Object.keys(storage).length -1];
    delete storage[Object.keys(storage).length -1] ;
    count--;
    return delword;
  };

  someInstance.size = function() {
    if(count < 0) count = 0;
    return count;
  };

  return someInstance;
};

if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = {
    Stack
  };
}
