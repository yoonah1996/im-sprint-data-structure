const Queue = function () {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  // eslint-disable-next-line no-var
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[count] = value;
    // eslint-disable-next-line no-plusplus
    count++;
    return value;
  };

  someInstance.dequeue = function () {
    const result = storage[Math.min(...Object.keys(storage))];
    delete storage[Math.min(...Object.keys(storage))];
    return result;
  };

  someInstance.size = function () {
    // if(count <= 0){
    //   return 0;
    // } return count;
    return Object.keys(storage).length;
  };

  return someInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue,
  };
}

// const someInstance = {};

//   // Use an object with numeric keys to store values
//   const storage = {};
//   let count = 0;

//   // Implement the methods below
//   someInstance.push = function(value) {
//     storage[count] = value;
//     count++;
//     return storage[count -1];
//   };

//   someInstance.pop = function() {
//     let delword = storage[Object.keys(storage).length -1];
//     delete storage[Object.keys(storage).length -1] ;
//     count--;
//     return delword;
//   };

//   someInstance.size = function() {
//     if(count < 0) count = 0;
//     return count;
//   };

//   return someInstance;
// };
