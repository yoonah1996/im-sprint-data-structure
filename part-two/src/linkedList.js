const LinkedList = function() {
  const list = {};
  // list.head = null;
  // list.tail = null;

  // list = {
  //   // head: null,
  //   // tail: null,
  //   first: {
  //     value: 5,
  //     next: {
  //       value: 10,
  //       next: null;
  //     }
  //   }
  // }

  list.addToTail = function(value) {
    if(!list.first){
      list.first = new Node(value);
      return value;
    }
    list.first.next = new Node(value);
    return value;
  };

  list.removeHead = function() {};

  list.contains = function(target) {};

  return list;
};

const Node = function(value) {
  this.value = value;
  this.next = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = LinkedList;
