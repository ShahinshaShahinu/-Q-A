// heap is not a linear data structure. It is a hierarchical data structure 

class Heap {
  heap = new Array();
  constructor(arr) {
    this.buildheap(arr);
  }

  buildheap(arr) {
    this.heap = arr;
    for (let i = this.parrent(arr.length - 1); i >= 0; i--) {
      this.shiftdown(i);
    }
  }

  delete() {
    swap(this.heap, 0, this.heap.length - 1);
    this.heap.pop();
    this.shiftdown(0);
  }

  shiftdown(index) {
    let leftidx = this.leftchild(index);
    let endidx = this.heap.length - 1;
    let idxtoshift;
    while (leftidx <= endidx) {
      let rightidx = this.rightchild(index);

      if (rightidx <= endidx && this.heap[rightidx] < this.heap[leftidx]) {
        idxtoshift = rightidx;
      } else {
        idxtoshift = leftidx;
      }

      if (this.heap[idxtoshift] < this.heap[index]) {
        swap(this.heap, idxtoshift, index);
      }

      index = idxtoshift;
      leftidx = this.leftchild(index);
    }
  }

  shiftup(index) {
    let parentidx = this.parrent(index);
    while (index > 0 && this.heap[parentidx] > this.heap[index]) {
      swap(this.heap, index, parentidx);
      index = parentidx;
      parentidx = this.parrent(index);
    }
  }

  insert(data) {
    this.heap.push(data);
    this.shiftup(this.heap.length - 1);
  }

  display() {
    console.log(this.heap);
  }
  leftchild(i) {
    return i * 2 + 1;
  }
  rightchild(i) {
    return i * 2 + 2;
  }

  parrent(i) {
    return Math.floor((i - 1) / 2);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let heaps = new Heap([8, 4, 5, 3, 2]);

heaps.delete();
heaps.insert(1);
heaps.display();
