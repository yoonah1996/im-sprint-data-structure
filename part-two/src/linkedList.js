const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = new Node(value);
    if(list.head === null){
      this.head = node;
    }else{
      this.tail.next = node;
    }
    this.tail = node;
    
  };

  list.removeHead = function() {
    //1. 안에 아무 값도 없을때 
    //2. 안에 하나만 있을때 
    //3. 여러 값이 들어있을때 =>
    let result = list.head;
    list.head = list.head.next;
    return result.value;
  };

  list.contains = function(target) {
    
    if(list.head.value === target){
      return true;
    }
      let result = list.head.next;
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
