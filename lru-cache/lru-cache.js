/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.memory = {}; // "key": Node, 
  this.head = new Node(-1, -1, null, null); // dummy node
  this.tail = new Node(-1, -1, null, null); // dummy node
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.count = 0;
  this.capacity = capacity;
};

var Node = function(key, val, prev, next) {
  this.key = key;
  this.val = val;
  this.prev = prev;
  this.next = next;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const used = this.memory[key];
  if (used !== null && used !== undefined && used.val !== -1) {
    // erase
    used.prev.next = used.next;
    used.next.prev = used.prev;
    // insert
    used.prev = this.head;
    used.next = this.head.next;
    this.head.next.prev = used;
    this.head.next = used;
  }
  return used === null || used === undefined  ? -1 : used.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.memory[key] !== null && this.memory[key] !== undefined) {
    const node = this.memory[key];
    node.val = value;
    // erase
    node.prev.next = node.next;
    node.next.prev = node.prev;
    // insert
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  } else {
    const node = new Node(key, value, this.head, this.head.next);
    this.head.next.prev = node;
    this.head.next = node;
    this.memory[key] = node;
    if (this.count === this.capacity){
      // delete last node in memory
      const unused = this.tail.prev;
      unused.prev.next = this.tail;
      this.tail.prev = unused.prev;
      this.memory[unused.key] = null;
      this.count -= 1;
    }
    this.count += 1;
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
