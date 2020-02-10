const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;
  // tail: {
  //   value: 5,
  //   next: {
  //     value: 6,
  //     next: {
  //       value: 7,
  //       next: null
  //     }
  //   };
  // }


  list.addToTail = function(value) {
    if(list.tail === null){
      list.tail = new Node(value);
      return value;
    }else{
      let recursion = list.tail.next;
      while(recursion !== null){
        recursion = recursion.next;
      }
      recursion = new Node(value);
      return value;
    }
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
