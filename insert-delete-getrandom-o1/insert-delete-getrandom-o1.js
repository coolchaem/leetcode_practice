
var RandomizedSet = function() {
  this.keyMap = {};
  this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.keyMap[val] !== undefined) {
    return false;
  }
  this.keyMap[val] = this.arr.length;
  this.arr.push(val);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.keyMap[val] === undefined) {
    return false;
  }
  // move lastnum to val pos(index)
  // (1) get lastnum, val index
  let lastNum = this.arr[this.arr.length - 1];
  let valIndex = this.keyMap[val];
  // (2) swap lastnum, val
  this.arr[valIndex] = lastNum;
  this.keyMap[lastNum] = valIndex;
  // (3) remove val index, val
  this.arr.pop();
  this.keyMap[val] = undefined;
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */