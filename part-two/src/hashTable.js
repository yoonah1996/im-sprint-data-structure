const { LimitedArray, getIndexBelowMaxForKey } = require("./hashTableHelpers");

const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  //key value chk => 모든 행동
  const index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

/*
해쉬 테이블 -> 

=================
getIndexBelowMaxForKey() => hash의 값으로 변환해주는 펑션
_storage => 테이블에 해쉬를 키로 value를 넣는거지
key [hash]     |  value

*/
/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = HashTable;
