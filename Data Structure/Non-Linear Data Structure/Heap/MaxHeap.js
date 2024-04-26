class MaxHeap {
  heap = new Array();

  constructor(arr) {
    this.buildHeap(arr);
  }

  buildHeap(arr) {
    this.heap = arr;
    for (let i = Math.floor(this.parent(this.heap.length - 1)); i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  shiftDown(currIndex) {
    let leftIndex = this.leftChild(currIndex);
    let endIndex = this.heap.length - 1;
    while (leftIndex <= endIndex) {
      let rightIndex = this.rightChild(currIndex);
      let indexToShift;
      if (
        rightIndex <= endIndex &&
        this.heap[rightIndex] > this.heap[leftIndex]
      ) {
        indexToShift = rightIndex;
      } else {
        indexToShift = leftIndex;
      }
      if (this.heap[currIndex] < this.heap[indexToShift]) {
        [this.heap[currIndex], this.heap[indexToShift]] = [
          this.heap[indexToShift],
          this.heap[currIndex],
        ];
        currIndex = indexToShift;
        leftIndex = this.leftChild(currIndex);
      } else {
        return;
      }
    }
  }

  shiftUp(currIndex) {
    let parentIdx = parseInt(this.parent(currIndex));
    while (currIndex > 0 && this.heap[parentIdx] < this.heap[currIndex]) {
      [this.heap[currIndex], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[currIndex],
      ];
      currIndex = parentIdx;
      parentIdx = this.parent(currIndex);
    }
  }

  peek() {
    return this.heap[0];
  }

  delete() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this.shiftDown(0);
  }

  display() {
    for (let i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i]);
    }
  }

  insert(data) {
    this.heap.push(data);
    this.shiftUp(this.heap.length - 1);
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }
}

let arr = [6, 2, 8, 5];
//   [4, 3, 2, 6, 7, 8];
let heap = new MaxHeap(arr);
heap.insert(2);
heap.insert(1);
heap.insert(10);
heap.display();
