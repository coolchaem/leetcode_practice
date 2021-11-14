
var MinStack = function() {
  this.head = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (this.head === null) {
    this.head = new Node(val, val, null);
  } else {
    this.head = new Node(val, Math.min(val, this.head.min), this.head);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.head = this.head.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.head.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.head.min;
};

var Node = function(val, min, next) {
  this.val = val;
  this.min = min;
  this.next = next;
}
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */