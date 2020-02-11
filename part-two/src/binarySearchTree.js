const BinarySearchTree = function(value) {
    var tree = Object.create(treeMethods);
    tree.value = value;
    tree.left = null;
    tree.right = null;
    return tree;
  };
  const treeMethods = {};
  treeMethods.insert = function(value){
      let node = new BinarySearchTree(value);
      if(value < this.value && this.left === null){
          this.left = node;
      }else if(value < this.value && this.left !== null){
          this.left.insert(value);
      }else if(value > this.value && this.right === null){
          this.right = node;
      }else if(value > this.value && this.right !== null){
          this.right.insert(value);
      }
  };
  treeMethods.contains = function(target){
      let node = this;
      if(node.value === target){
          return true;
      }else if(node.value > target && node.left !== null){
          return node.left.contains(target);
      }else if(node.value < target && node.right !== null){
          return node.right.contains(target);
      }
      return false;
  };
  treeMethods.depthFirstLog = function(func){
     func(this.value);
     if(this.left !== null){
         this.left.depthFirstLog(func);
     }
     if(this.right !== null){
         this.right.depthFirstLog(func);
     }
  };
  /*
   * Complexity: What is the time complexity of the above functions?
   */
  module.exports = BinarySearchTree;