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
  // const rec = function(obj){
  //   return obj.next;
  // }

  list.addToTail = function(value) {
    if(list.head === null){
      list.head = new Node(value);
      list.tail = new Node(value);
      return value;
    }else{
      // if(list.next === null){
      //   list.next = new Node(value);
      //   list.tail = new Node(value);
      //   return value;
      // }else{
        this.next = new Node(value);
        list.tail = new Node(value);
        return value;
      // }
    }
    
  };

  list.removeHead = function() {
    let result = list.head.value;
    list.head = list.next;
    return result;
  };

  list.contains = function(target) {
    
    if(list.head.value === target){
      return true;
    }
      let result = list.next;
      while(result !== null){
        if(result.value === target){
          return true;
        }
        result = result.next;
    } 
    return false;
  };
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
