
var MedianFinder = function() {
  this.maxHeap = new Heap(true);
  this.minHeap = new Heap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.maxHeap.push(num);
  this.minHeap.push(this.maxHeap.top());
  this.maxHeap.pop();
  if (this.maxHeap.size() !== this.minHeap.size()) {
    this.maxHeap.push(this.minHeap.top());
    this.minHeap.pop();
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.maxHeap.size() === this.minHeap.size()) {
    return (this.maxHeap.top() + this.minHeap.top()) / 2;
  } else {
    return this.maxHeap.top();
  }
};


class Heap {
  constructor(bMax) {
    this.arr = [];
    this.bMax = bMax === undefined ? false : bMax;
  }
  
  size() {
    return this.arr.length;
  }

  top() {
    return this.arr[0];
  }
  
  push(num) {
    this.arr.push(num);
    this.upHeap();
  }
  
  pop() {
    if (this.arr.length < 1) {
      return;
    }
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    this.downHeap();
  }
  
  upHeap() {
    let index = this.arr.length - 1;
    let parentIndex = Math.floor((index + 1) / 2) - 1;
    while (parentIndex >= 0 && this.compare(index, parentIndex)) {
      let tmp = this.arr[index];
      this.arr[index] = this.arr[parentIndex];
      this.arr[parentIndex] = tmp;
      index = parentIndex;
      parentIndex = Math.floor((index + 1) / 2) - 1;
    }
  }
  
  downHeap() {
    let index = 0;
    let left = (index + 1) * 2 -1, right = (index + 1) * 2;
    let targetChild = this.arr.length;
    if (left < this.arr.length && right < this.arr.length) {
      targetChild = this.compare(left, right) ? left : right;
    } else {
      targetChild = left;
    }
    
    while (targetChild < this.arr.length && this.compare(targetChild, index)) {
      let tmp = this.arr[index];
      this.arr[index] = this.arr[targetChild];
      this.arr[targetChild] = tmp;
      index = targetChild;
      left = (index + 1) * 2 - 1, right = (index + 1) * 2;
      if (left < this.arr.length && right < this.arr.length) {
        targetChild = this.compare(left, right) ? left : right;
      } else {
        targetChild = left;
      }
    }
  }
  
  compare(left, right) {
    if (this.bMax) {
      return this.arr[left] > this.arr[right];
    } else {
      return this.arr[left] < this.arr[right];
    }
  }
}
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */