const Tree = function(value) {
  const newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = null; // fix me
  return newTree;
};
const treeMethods = {};
treeMethods.addChild = function(value) {
  let node = new Node(value);
  let count = 0;
  if(!this.children){
    this.children = {};
    this.children[count] = node;
    count = count + 1;
  }else{
    this.children[Object.keys(this.children).length] = node;
  }
};
treeMethods.contains = function(target) {
  let result = false;
  let node = this;
  if(node.value === target){
    return true;
  }else{
    if(node.children !== null){
      for(let i = 0; i < Object.keys(node.children).length; i++){
        let temp = node.children[i];
        result = temp.contains(target);
        if(result === true) return true;
      }
    }
  }
  return result;
};

const Node = function(value){
  let result = Object.create(treeMethods);
  result.value = value;
  result.children = null;
  return result;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = Tree;